# Swudo

A light weight Runtime and Parser for Typescript.

## Installation

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

Building your code using the existing **tsconfig.json** Would be a successful build but when running and testing you may get an error showing
`Cannot file module *blah blah blah* imported from *blah blah blah*`

You can fix this by going into **dist/bin** and **dist/lib** and adding a Javascript Extension to import statement
