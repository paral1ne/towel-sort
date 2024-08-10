// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    }
    let arr = [];
    matrix.map((el, i) => {
        if (i % 2 == 0) {
            arr.push(el.join(","));
        } else {
            arr.push(el.reverse().join(","));
        }
    });
    return arr.join(",").split(",");
};
