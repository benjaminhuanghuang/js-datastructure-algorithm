## Solution 1: Run ES6 code using babel-node

babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.

[@babel/node offical document](https://babeljs.io/docs/en/next/babel-node.html)

Install 
```
npm install --save-dev @babel/core @babel/node
```

Add babel cofiguration into package.json
```
// package.json
{  
  // .. contents above
  "babel": {
    "presets": ["@babel/preset-env"]
  },
}
```
Or Create .babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```

Then run 
```
  npx babel-node ./src/es6.js 
```

## Solution 2: Transpile ES6 code
Add a script named transpile in package.json:
```
// package.json
"scripts": {
  "transpile": "babel ./src --out-dir dist",
}
```