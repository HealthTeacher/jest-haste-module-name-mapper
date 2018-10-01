# jest-haste-module-name-mapper

Utilizing both `hase` and `moduleNameMapper` config options causes Jest's module resolution to fail.

### Steps to Reproduce

1. Clone this test case repository.
1. `yarn install`
1. `yarn test`

### Expected Result

The required module resolves and the test passes.

### Actual Result

The required module does not resolve and the test fails throwing an error.

### Notes

* Replacing the root directory alias `require` with a relative require fixes the related test: `const Greeter = require('./components/Greeter');`
* Relocating `components/Greeter/index.web.js` to `components/Greeter/index.web.js` also fixes the related test.
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
