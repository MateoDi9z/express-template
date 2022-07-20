## Episode 4 - Test-driven development support

### Step 1
To start testing, we are going to install Mocha, Chai, supertest and it's types with this command:
```sh
npm i -D mocha chai supertest @types/mocha @types/chai @types/supertest
```

### Step 2
Create a `.mocharc.json` to setup Mocha with these settings:
```json
{
  "spec": "test/**/*.spec.ts",
  "require": ["ts-node/register"],
  "watchExtensions": "ts",
  "extension": "ts",
  "timeout": 3000
}
```

### Step 3
Create a `test` folder, where all test will be, and create a `server.spec.ts`.
This test will check if the server runs without errors. code:
```ts
import "../src/moduleResolver"    // MODULE RESOLVER
import { expect } from "chai";    // Chai library
import request from "supertest";  // Supertest endpoint tester

// typescript ignore because it does not recognize "@src" path alias
// @ts-ignore
import createServer from "@src/server"; // Create server function
const app = createServer();             // Create a server instance

describe ("> Server", () => {
  it ("server is created without errors", (done) => {
    request(app).get("/").expect(200, done);  // It expects a 200 status code from app
  })

  it ("\"/\" responds with 'Hello World!'", (done) => {
    request(app).get("/").expect("Hello World!", done)  // It expects a Hello World when GET @ "/"
  })
})
```

### Step 5
Exclude the test directory from typescript compilation in `tsconfig.json`, it should look like this:
```json
{
  "exclude": ["test"],
  "compilerOptions": {
    ...
  }
}
```

### Step 4
Finally add the test script: `"test": "mocha --check-leaks"` to the scripts object in `package.json` and try running it with:
```sh
npm test
```

### [Go to Episode 5](./%5B5%5D%20Github%20Workflows.md)