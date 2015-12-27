module.exports = (obj, ...initializers) => {
  const bounds = initializers.map(fn => fn(obj));
  return callback => bounds.reduceRight(
    (next, fn) => err => err ? callback(err) : fn(next),
    err => callback(err, !err && obj)
  )();
}
