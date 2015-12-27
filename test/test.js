const test = require('tape');
const callInitializers = require('..');

test('test callInitializers', function (t) {
  t.plan(4);

  const obj = { };

  callInitializers(obj,
    obj => callback => {
      t.pass();
      callback();
    },
    obj => callback => {
      t.pass();
      callback();
    }
  )((err, obj2) => {
    t.ok(!err);
    t.ok(obj === obj2);
  });
});

test('error case', function (t) {
  t.plan(2);

  const obj = { };
  const err = new Error();

  callInitializers(obj,
    obj => callback => {
      callback(err);
    },
    obj => callback => {
      t.fail('Must not be reachable');
      callback();
    }
  )((err2, obj2) => {
    t.ok(err === err2);
    t.ok(!obj2);
  });
});
