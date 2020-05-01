function solution(matrix) {
    let totalAreaNumber = 0;
    matrix.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            totalAreaNumber += areaCount(rowIndex, columnIndex, matrix);
       })
    });
    return totalAreaNumber;
}

function areaCount(row, column, matrix) {
    const sameAreaIncrement = 0;
    const newAreaIncrement = 1;

    return hasAdjacent(row, column, matrix) ? sameAreaIncrement : newAreaIncrement;
}

function hasAdjacent(row, column, matrix) {
    const cellValue = matrix[row][column];
    const southValue = hasSouth(row, matrix) ? getSouth(row, column, matrix) : -1;
    const eastValue = hasEast(column, matrix) ? getEast(row, column, matrix) : -1;

    return continues(cellValue, eastValue, southValue);
}

function continues(cellValue, eastValue, southValue) {
    return cellValue === eastValue || cellValue === southValue;
}

function getSouth(row, column, matrix) {
    return matrix[row + 1][column];
}

function hasSouth(row, matrix) {
    return row + 1 <= matrix.length - 1;
}

function getEast(row, column, matrix) {
    return matrix[row][column + 1];
}

function hasEast(column, matrix) {
    return column + 1 <= matrix[0].length - 1;
}

export {
    areaCount,
    continues,
    hasAdjacent,
    getEast,
    hasEast,
    getSouth,
    hasSouth,
    solution
}
