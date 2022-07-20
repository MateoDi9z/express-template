## Episode 3 - Nodemon Development Environment

### Step 1
First of all, install nodemon
```sh
npm i -D nodemon
```

### Step 2
Create a `nodemon.json` file to setup nodemon with these configs:
```json
{
  "watch": ["src"],                     /* Folder to watch for changes */
  "ext": "ts,js,json",                  /* File extensions to watch */
  "ignore": ["node_modules", "build"],  /* Ignored directories */
  "exec": "ts-node ./src",              /* Command */
  "restartable": "rs",                  /* Restart command */
  "env": {                              /* Environment Variables for development */
    "NODE_ENV": "development"
  }
}
```

### Step 3
Edit `start:dev` script at `package.json` to look like this: `"start:dev": "nodemon"`, and now nodemon will be in charge of our development server trough our config file. Try it out using this command:
```sh
npm run start:dev
```
Now the server will restart as soon as we edit a ".ts", ".js" or ".json" file and even you can restart it manually typing `rs` in the console

### [Go to Episode 4](./%5B4%5D%20Testing.md)