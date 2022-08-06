## Episode 5 - Setting up Github workflows

### Step 1
Go to the Actions tab on your Github repo, and click Configure on the Node.js one

![image](https://user-images.githubusercontent.com/60207256/180066676-49b14a8d-a106-4f95-8e11-e4a6425bc2bb.png)

### Step 2
Copy and paste this code:
```yml
name: Build

on:
  push:
  pull_request:
    branches: [ "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
    steps:
    - uses: actions/checkout@v3
    - name: Build and run tests ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm test
    - run: npm run build --if-exists

```
And click on commit to master. Now, anytime you push your code, github will run the tests and compile the typescript to look for errors

### Step 3
Now you can go to your actions tab and click the three dots of your action
![image](https://user-images.githubusercontent.com/60207256/180067437-6f9f6c06-31e8-4498-ae23-0c0eda0563d9.png)

And click on Create status badge. This menu will pop-up

![image](https://user-images.githubusercontent.com/60207256/180067662-0bf0a21e-28b2-4ecd-9c83-22fdbf666275.png)

Click then green button to copy text and paste it in your `README.md` file (if you don't have one, create it).

### [Go to Episode 6](./%5B6%5D%20Linter.md)
