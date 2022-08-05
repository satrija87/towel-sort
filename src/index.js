// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let array = matrix.map((el, index) => {
        if (index % 2 !== 0) {
            return el.reverse();
        }
        return el;
    });
    return array.flat();
};

