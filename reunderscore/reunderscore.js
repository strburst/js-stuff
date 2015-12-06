// Collections
// - each
// - map

exports.map = function(list, iteratee, context) {
  var result = [];

  for (var key in list) {
    result.push(iteratee.call(context, list[key]));
  }

  return result;
};

// - reduce
// - reduceRight
// - find
// - filter

exports.filter = function(list, predicate, context) {
  var result = [];

  for (var key in list) {
    if (predicate.call(context, list[key])) {
      result.push(list[key]);
    }
  }

  return result;
};

// - where
// - findWhere
// - reject
// - every
// - some
// - contains
// - invoke
// - pluck
// - max
// - min
// - sortBy
// - groupBy
// - indexBy
// - countBy
// - shuffle
// - sample
// - toArray
// - size
// - partition

// Arrays
// - first
// - initial
// - last
// - rest
// - compact
// - flatten
// - without
// - union
// - intersection
// - difference
// - uniq
// - zip
// - unzip
// - object
// - indexOf
// - lastIndexOf
// - sortedIndex
// - findIndex
// - findLastIndex
// - range

// Functions
// - bind
// - bindAll
// - partial
// - memoize
// - delay
// - defer
// - throttle
// - debounce
// - once
// - after
// - before
// - wrap
// - negate
// - compose

// Objects
// - keys
// - allKeys
// - values
// - mapObject
// - pairs
// - invert
// - create
// - functions
// - findKey
// - extend
// - extendOwn
// - pick
// - omit
// - defaults
// - clone
// - tap
// - has
// - matcher
// - property
// - propertyOf
// - isEqual
// - isMatch
// - isEmpty
// - isElement
// - isArray
// - isObject
// - isArguments
// - isFunction
// - isString
// - isNumber
// - isFinite
// - isBoolean
// - isDate
// - isRegExp
// - isNaN
// - isNull
// - isUndefined

// Utility
// - noConflict
// - identity
// - constant
// - noop
// - times
// - random
// - mixin
// - iteratee
// - uniqueId
// - escape
// - unescape
// - result
// - now
// - template

// Chaining
// - chain
// - value

