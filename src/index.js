module.exports = function towelSort(matrix) {
    //  Check for empty array
    if (!matrix || matrix.length === 0) return [];
    // Go the array elements turn over the odd ones and make the array one-dimensional
    return matrix.flatMap((row, index) =>
        index % 2 === 0 ? row : row.reverse()
    );
};
