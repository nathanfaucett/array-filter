array-filter
=======

creates a new array with all elements that pass the test implemented by the provided function.


```javascript
var arrayFilter = require("@nathanfaucett/array-filter");


var array = arrayFilter([1, 2, 3, 4, 5, 6], function isDivisibleBy2(value, index, array) {
    return value % 2 === 0;
});

// array === [2, 4, 6]
```
