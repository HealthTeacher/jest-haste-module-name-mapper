const index = require('../index');

it('greets the subject', () => {
  expect(index('World')).toBe('Hello, World!');
});
