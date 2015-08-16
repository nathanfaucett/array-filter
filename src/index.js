module.exports = arrayFilter;


function arrayFilter(array, callback) {
    var i = -1,
        il = array.length - 1,
        results = [],
        j = 0,
        value;

    while (i++ < il) {
        value = array[i];

        if (callback(value, i, array)) {
            results[j++] = value;
        }
    }

    return results;
}
