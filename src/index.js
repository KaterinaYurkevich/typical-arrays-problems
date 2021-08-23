
exports.min = function min (array) {
  if (array && array.length !== 0) {
    let min = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    } 
    return min;
    } else return 0;
}

exports.max = function max (array) {
    if (array && array.length !== 0) {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    } else return 0;
}

exports.avg = function avg (array) {
    if (array && array.length !== 0) {
        console.log(array);
        let avg = 0;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        avg = sum / array.length;
        return avg;
    } else return 0;
}
