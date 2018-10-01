const Greeter = require('~/components/Greeter');

// Replacing the above `require` with below fixes the related test
// const Greeter = require('./components/Greeter');

// Relocating `components/Greeter/index.web.js` to
// `components/Greeter/index.web.js` also fixes the related test

// The combination of `haste` and `moduleNameMapper` config appears to cause
// an issue

module.exports = Greeter;
