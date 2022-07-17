## Episode 2 - Express Setup

### Step 1
Install new dependencies
```sh
npm install express dotenv
```
And new dev dependencies for Typescript types
```sh
npm i -D @types/express @types/node
```

### Step 2
Create a `server.ts` file in the `src` folder, then setup express inside, it should look like this:
```ts
import express, { Application, Request, Response, NextFunction } from "express"

export default function createServer() {
  const app: Application = express()

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!")
  })
  
  return app
}
```

### Step 3
To work with absolute paths, we need to create a ```moduleResolver.ts``` file, where we will setup how "@src" path is going to work
```ts
import 'dotenv/config'
import 'module-alias/register';
import path from 'path';

const moduleAlias = require('module-alias')

const env: string = process.env.NODE_ENV || "development"

//? Register alias
if (env == "development") moduleAlias.addAlias('@src', __dirname + '/')
else if (env == "production") moduleAlias.addAlias('@src', path.join(__dirname + '/../build/'))
```

### Step 4
Finally, we are going to edit `index.ts` so that it creates a server instance and setup module resolver
```ts
import "./moduleResolver"
import express, { Application, Request, Response, NextFunction } from "express"
import createServer from "@src/server";

const startServer = () => {
  const app = createServer()
  const port: number = parseInt(<string>process.env.PORT, 10) || 3000

  app.listen(port, () => {
    console.log("Server running on port %d", port)
  })
}

startServer()
```

### Step 5
And now you can try running it using the start:dev command, but if you want to try it compiled, you need to create a `.env` file where we will say that `NODE_ENV=production`, this is to change "@src" path from "src" dir to "build" dir

IMPORTANT: Also add `.env` to the `.gitignore` file because it may have delicate data in a near future

### [Go to Episode 3](./%5B3%5D%20Nodemon.md)