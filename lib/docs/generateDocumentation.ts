import ts from 'typescript';

interface DocEntry {
    name?: string;
    fileName?: string;
    documentation?: string;
    type?: string;
    constructors?: DocEntry[];
    parameters?: DocEntry[];
    returnType?: string;
}

function generateDocumentation(
    fileNames: string[],
    options: ts.CompilerOptions
): void {
    const program = ts.createProgram(fileNames, options);

    const checker = program.getTypeChecker();
    const output: DocEntry[] = [];

    for (const sourceFile of program.getSourceFiles()) {
        if (!sourceFile.isDeclarationFile) {
            ts.forEachChild(sourceFile, visit);
        }
    }


    function visit(node: ts.Node) {
        if (!isNodeExported(node)) {
            return;
        }

        if (ts.isClassDeclaration(node) && node.name) {
            const symbol = checker.getSymbolAtLocation(node.name);
            if (symbol) {
                output.push(serializeClass(symbol));
            }
        } else if (ts.isModuleDeclaration(node)) {
            ts.forEachChild(node, visit);
        }
    }

    function serializeSymbol(symbol: ts.Symbol): DocEntry {
        return {
            name: symbol.getName(),
            documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
            type: checker.typeToString(
                checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
            )
        };
    }

    function serializeClass(symbol: ts.Symbol) {
        const details = serializeSymbol(symbol);

        const constructorType = checker.getTypeOfSymbolAtLocation(
            symbol,
            symbol.valueDeclaration!
        );

        details.constructors = constructorType
            .getConstructSignatures()
            .map(serializeSignature);

        return details;
    }

    function serializeSignature(signature: ts.Signature) {
        return {
            parameters: signature.parameters.map(serializeSymbol),
            returnType: checker.typeToString(signature.getReturnType()),
            documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
        };
    }

    function isNodeExported(node: ts.Node): boolean {
        return (
            (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0 ||
            (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
        );
    }
}

export default generateDocumentation;