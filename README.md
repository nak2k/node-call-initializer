# call-initializer

Call asynchronous initializers on an object.

## Example

```js
const express = require('express');
const callInitializer = require('call-initializer');

const initializer1 = app => next => {
  // Do something
  next();
};

const initializer2 = app => next => {
  // Do something
  next();
};

/*
 * Call initializers.
 */
const app = express();
callInitializer(app,
  initializer1,
  initializer2
)((err, app) => {
  //
});
```
