## Episode 1 - Typescript Initialization

### Requirements:
- Typescript (globally installed)

### Step 1
If you don't have Typescript installed run ```npm install -g typescript```

Then to create config file run:
```sh
tsc --init
```
And a ```tsconfig.json``` file will be created 

### Step 2
In this file you will see a json object called "compilerOptions" where our configurations will be,
most of these will be commented so uncomment the ones used

> Example of Default configs:
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### Step 3
Add new configurations:
- ```"rootDir": "src",``` because our source files will be in "./src" dir
- ```"baseUrl": ".",``` to specify the base directory to resolve non-relative module names
- ```"paths": { "@src/*": ["src/*"] },``` so that "@src" path is associated with "./src" dir
- ```"outDir": "build"``` to emit compiled files into "./build" dir

> ### Finished "tsconfig.json" file
```json
{
  "compilerOptions": {
    "target": "es5",                            /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                       /* Specify what module code is generated. */
    "rootDir": "src",                           /* Specify the root folder within your source files. */
    "baseUrl": ".",                             /* Specify the base directory to resolve non-relative module names. */
    "paths": {                                  /* Specify a set of entries that re-map imports to additional lookup locations. */
      "@src/*": ["src/*"]                       /* "@src" -> "./src" */
    },                                          /* */
    "outDir": "build",                          /* Specify an output folder for all emitted files. */
    
    "strict": true,                             /* Enable all strict type-checking options. */
    "esModuleInterop": true,                    /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,   /* Ensure that casing is correct in imports. */
    "skipLibCheck": true                        /* Skip type checking all .d.ts files. */
  }
}
```

### Step 4
Now that typescript and npm is configured we should start installing our dependencies, run command:

```sh
npm i module-alias
```
and then for development dependencies
```sh
npm i -D typescript ts-node
```

Then we will have to create a "/src" directory with a file called ```index.ts``` in it,
and add these scripts to our `package.json` file:
```json
{
  ...
  "scripts": {
    "start:dev": "ts-node ./src",   /* Start dev */
    "start:build": "node ./build",  /* Start builded */
    "build": "tsc"                  /* Build */
  },
  ...
}
```

### Step 5
If you are using git, you should create a `.gitignore` file.

Example:
```gitignore
node_modules
build
```

And that's all for now, you can try running ```npm run start:dev``` to run ".ts" files in your source folder, or you can build and try compiled files!

### [Go to Episode 2](./%5B2%5D%20Express.md)