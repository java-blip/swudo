# Swudo

A light weight Runtime and Parser Library for **Typescript.**

## Installation
Not published yet!
**Npm**

```
npm i -g swudo
```

**Yarn**

```
yarn i -g swudo
```

## Usage

### Via **Cli**

```
usage:
       --extract <file> <identifiers[]>, -e <file> <identifiers[]> : Extract parts from code by specifying identifiers.
       --transpile <file> : Transpile Typescript and get the Compiled result in the console
       --docs <file>: Returns the documentation of the exported classes

       Compiling and Running a Typescript Program - <file> --out<file>
       --out?: Filename to append the output
```

## TroubleShooting

We reccomend using extract at last while using cli

```
swudo --transpile main.ts --extract test.ts [identifiers]
```

But if you specify it like this

```
swudo --extract test.ts [identifiers] --transpile main.ts
```

You are gonna get some runtime errors or additonal logs

## Contributing

Feel free to open a pull request or an issue.

If you just wanna add a new feature just open a **issue** before you open a **PR**

Fork this repository to get started.

### Development issues

- Build issue **#1**: Building your code using the existing **tsconfig.json** Would be a successful build but when running and testing you may get an error showing
  `Cannot file module *blah blah blah* imported from *blah blah blah*`. You can fix this by going into **dist/bin** and **dist/lib** and adding a Javascript Extension to import statement

### Solutions

**#1**: with the existing `npm run build` command we have added a `npm run fix:path` which would really fix paths inside the build folder. But, you may have to specify the files in `scrips/fixPaths.js` file. Just like this -

```js
setTimeout(() => {
  console.log(fixPaths(`${process.cwd()}/dist/bin/swudo.js`));
  console.log(fixPaths(`${process.cwd()}/dist/lib/index.js`));
  console.log(
    fixPaths(`${process.cwd()}/dist/lib/docs/generateDocumentation.js`)
  );
  console.log(fixPaths(`${process.cwd()}/dist/lib/utils/extract.js`));
  console.log(fixPaths(`${process.cwd()}/dist/lib/utils/readFile.js`));
  console.log(fixPaths(`${process.cwd()}/dist/lib/utils/transpile.js`));
}, 2000);
```

It should be inside a setTimeout because we want a break between the build and fix tasks.
