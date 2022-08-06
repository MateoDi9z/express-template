## Episode 6 - ESLinter

### Step 1
To start, install ESLint globally:
```sh
npm i -g eslint
```

### Step 2
Now we can init our eslint config, to to this, you will have to run the command:
```sh
eslint --init
```
after that, answer config questions, and now new dependencies will be installed and a config file should be created in your root dir

### Answers Example:
![image](https://user-images.githubusercontent.com/60207256/183230184-397bb835-5c3b-4f81-be64-b0e7dbf9a5a4.png)

### Step 3
one more npm command and edit the run:dev command. The first one will be a `lint` command to try to fix all eslint problems and the other one will be edited to run linter check whenever we start our development server. code:
```json
{
  ...
  "scripts": {
    "start:dev": "eslint --ext .ts . & nodemon",
    "start:build": "node ./build",
    "lint": "eslint --fix --ext .ts .",
    "build": "npm run lint & tsc",
    "test": "mocha --check-leaks"
  },
  ...
}
```

### Step 4
Moving on, now we can add Prettier to our project, to do this, install it
```sh
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```
and create an empty config file, called `.prettierrc.json` to let editors and other tools know you are using Prettier.
Here you can add all prettier options you want. More info [Here](https://prettier.io/docs/en/options.html), but for these example we are going to use these:
```json
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "parser": "typescript",
  "endOfLine": "crlf"
}
```
and add `"prettier"` to the `"extends"` and `"plugins"` props in the `.eslintrc.json` file.
Also add the rule `"prettier/prettier": "error"` to the `"rules"`, 

### Step 5
Also add `.prettierignore` & `.eslintignore` files, so that these tools ignore build, node_modules, and other non-wanted folders to be edited. Both will need to ignore this files:
```
node_modules
build
```

### Extra
These steps may throw some errors caused by our path resolver, follow your IDE tips to solve these errors or open a issue on the [Project Github Repo](https://github.com/MateoDi9z/express-template)


# End of Tutorial
Hope it works and helps to create new projects or to understand how project configs work!