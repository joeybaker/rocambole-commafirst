var obj = {
  "name": "rocambole",
  "version": "0.3.3",
  "description": "Recursively walk and transform EcmaScript AST",
  "main": "rocambole.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "istanbul test test/runner.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/millermedeiros/rocambole.git"
  },
  "bugs": {
    "url": "https://github.com/millermedeiros/rocambole/issues"
  },
  "keywords": [
    "ast",
    "walk",
    "syntax",
    "source",
    "tree",
    "traversal",
    "falafel",
    "burrito",
    "esprima"
  ],
  "author": "Miller Medeiros <http://blog.millermedeiros.com>",
  "license": "MIT",
  "dependencies": {
    "esprima": "~1.0"
  },
  "devDependencies": {
    1: 'wut',
    mocha: "~1.7",
    "expect.js": "0.2",
    istanbul: "~0.1.23"
  }
}
