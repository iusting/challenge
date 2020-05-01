function concatenateSubarrays(array) {
    return [].concat(...array);
}

function getUniqueValuedArray(array) {
    return [...new Set(array)];
}

function countOccurrence(array, toSearch) {
    return array.filter(entry => entry == toSearch).length;
}

function solution(S) {
    const array = JSON.parse(S);
    const targetOccurrences = array.length;
    const uniqueSubArrays = array.map(subArray => getUniqueValuedArray(subArray));
    const mergedSubArrays = concatenateSubarrays(uniqueSubArrays);

    return getUniqueValuedArray(mergedSubArrays.filter(
        entry => countOccurrence(mergedSubArrays, entry) === targetOccurrences))
        .sort();
}

export {
    concatenateSubarrays,
    countOccurrence,
    getUniqueValuedArray,
    solution
};
