# jest-haste-module-name-mapper

<!-- Love Jest? Please consider supporting our collective: 👉  https://opencollective.com/jest/donate -->

## 🐛 Bug Report

Utilizing both `hase` and `moduleNameMapper` config options causes Jest's module resolution to fail.

## To Reproduce

1. Clone the [test case repository](https://github.com/HealthTeacher/jest-haste-module-name-mapper).
1. `yarn install`
1. `yarn test`

## Expected behavior

The required module resolves and the test passes.

## Link to repl or repo (highly encouraged)

https://github.com/HealthTeacher/jest-haste-module-name-mapper

## Run `npx envinfo --preset jest`

Paste the results here:

```bash
System:
  OS: macOS 10.14
  CPU: x64 Intel(R) Core(TM) i7-4750HQ CPU @ 2.00GHz
Binaries:
  Node: 10.8.0 - ~/.asdf/shims/node
  Yarn: 1.10.1 - /usr/local/bin/yarn
  npm: 6.2.0 - ~/.asdf/shims/npm
npmPackages:
  jest: ^23.6.0 => 23.6.0
```

### Notes

* Replacing the root directory alias `require` with a relative require fixes the related test: `const Greeter = require('./components/Greeter');`
* Relocating `components/Greeter/index.web.js` to `components/Greeter/index.js` also fixes the related test.
* The combination of `haste` and `moduleNameMapper` config appears to cause an issue.

### Error Output

```
FAIL  __tests__/index.test.js
 ● Test suite failed to run

   Configuration error:

   Could not locate module ~/components/Greeter mapped as:
   /Users/username/Sites/oss/jest-haste-module-name-mapper/components/Greeter.

   Please check your configuration for these entries:
   {
     "moduleNameMapper": {
       "/^~\/(.*)/": "/Users/username/Sites/oss/jest-haste-module-name-mapper/$1"
     },
     "resolver": null
   }

   > 1 | const Greeter = require('~/components/Greeter');
       |                         ^
     2 |
     3 | // Replacing the above `require` with below fixes the related test
     4 | // const Greeter = require('./components/Greeter');

     at createNoMappedModuleFoundError (node_modules/jest-resolve/build/index.js:411:17)
     at Object.<anonymous> (index.js:1:25)
```
