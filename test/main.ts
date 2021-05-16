interface Doc {
    entry?: string;
}

var myDoc: Doc = {
    entry: 'main.ts'
}

export class C {
    /**
     * constructor documentation
     * @param a my parameter documentation
     * @param b another parameter documentation
     */
    constructor(a: string, b: C) { }
}

console.log(C);

console.log('Hello!!!!');