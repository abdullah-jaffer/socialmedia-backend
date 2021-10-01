const assert = require('assert');
const utilities = require('../helpers/index.ts');
const {paginationObject} = utilities;

describe('pagination utility tests cases', function() {
  const tests = [
    {args: [1, 2], expected: {limit:1, offset:2}},
    {args: [1, 2], expected: {limit:1, offset:2}},
    {args: [1, 2], expected: {limit:1, offset:2}},
  ];

  tests.forEach(({args, expected}) => {
    it(`correctly creates paginaion object`, function() {
      const res = paginationObject(args[0], args[1]);
      assert.strictEqual(res, expected);
    });
  });
});