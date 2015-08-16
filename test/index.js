var tape = require("tape"),
    arrayFilter = require("..");


tape("arrayFilter(array, callback) creates a new array with all elements that pass the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        arrayFilter([0, 1, 2, 3, 4], function(value) {
            return value % 2 === 0;
        }), [0, 2, 4]
    );
    assert.end();
});
