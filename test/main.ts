interface Doc {
    entry?: string;
}

var myDoc: Doc = {
    entry: 'main.ts'
}


console.log('Hello!!!!');
console.log(myDoc);
console.log(process);
export class C {
    /**
     * constructor documentation
     * @param a my parameter documentation
     * @param b another parameter documentation
     */
    constructor(a: string, b: C) { }

    render(): string {
        return '';
    }
}
