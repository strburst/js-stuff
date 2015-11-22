# Chapter 4: Functions

## Immediately executing anonymous functions
Problem: create a simple counter function that starts from 1 and increments
the value it returns every time, like this

```js
  var count = 0;
  function counter() {
    count += 1;
    return count;
  }

  counter();   // 1
  counter();   // 2
  counter();   // 3
```

What if you wanted to make the variable count "private", so that no one but
your counter function can access it?

Unlike in other languages, in Javascript, only functions get their own scope,
so we need to somehow wrap `count` inside a function.

```js
  var counter = function() {
    var count = 0;
    return function() {
      count += 1;
      return count;
    }
  }();
```

If you trace the execution of the wrapper function we've introduced, it creates
a count variable, then returns the actual counter function, which gets assigned
to our counter back in the global scope. Interestingly, `count` lives longer
than the function it was defined in.

Notice that it immediately executes right after it's defined; it truly is just
a wrapper.
