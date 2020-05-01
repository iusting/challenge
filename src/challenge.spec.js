import {
    concatenateSubarrays,
    countOccurrence,
    getUniqueValuedArray,
    solution
} from './challenge';

describe('Test concatenate function', () => {
    test('Concatenate empty array', () => {
        expect(concatenateSubarrays([])).toEqual([]);
    });

    test('Concatenate array of empty subarrays', () => {
        expect(concatenateSubarrays([[],[]])).toEqual([]);
    });

    test('Concatenate non empty subarray with empty one', () => {
        expect(concatenateSubarrays([[3,2],[]])).toEqual([3,2]);
    });

    test('Concatenate non empty subarrays with different values', () => {
        expect(concatenateSubarrays([[3,2],[1,4]])).toEqual([3,2,1,4]);
    });

    test('Concatenate non empty subarrays with same value', () => {
        expect(concatenateSubarrays([[3,2],[2,3]])).toEqual([3,2,2,3]);
    });

    test('Concatenate non empty array with common values', () => {
        expect(concatenateSubarrays([[3,2],[1,4,3]])).toEqual([3,2,1,4,3]);
    });
});

describe('Test removeDuplicates function', () => {
    test('Remove duplicates from empty array', () => {
        expect(getUniqueValuedArray([])).toEqual([]);
    });

    test('Remove duplicates from non duplicates containing array', () => {
        expect(getUniqueValuedArray([4,2,1,3])).toEqual([4,2,1,3]);
    });

    test('Remove single duplicates from array', () => {
        expect(getUniqueValuedArray([5,2,1,3,4,1])).toEqual([5,2,1,3,4]);
    });

    test('Remove multiple duplicates from array', () => {
        expect(getUniqueValuedArray([1,2,1,4,1,4,1,4,1,6,2,0])).toEqual([1,2,4,6,0]);
    });
});

describe('Test countOccurrence function', () => {
    test('Counts 0 from empty array', () => {
        expect(countOccurrence([], 100)).toEqual(0);
    });

    test('Counts 0 when element not found', () => {
        expect(countOccurrence([4,2,1,3], 5)).toEqual(0);
    });

    test('Counts 1 for single occurrence', () => {
        expect(countOccurrence([5,2,1,3,4,1], 4)).toEqual(1);
    });

    test('Counts multiple occurrences', () => {
        expect(countOccurrence([1,2,1,4,1,4,1,4,1,6,2,0], 1)).toEqual(5);
    });
});

describe('Test solution function', () => {
    const testData = [
        {

        },
        {
            csv: "[[19,0,],[1,3,5]",
            expectedArray: []
        },
        {
            csv: "[[1,6,5,9,0,4],[1,1,2,1,4,5],[1,6,5,6,7,5,4],[1,3,4,5,9,5,1,3],[3,4,5,3,1,4],[9,5,4,1]]",
            expectedArray: [1,4,5]
        },
    ];

    test('Returns empty array when empty subarray is found', () => {
        expect(solution("[[1,6,5,9,0,4],[],[1,3,4,5,9,5,1,3],[9,5,4,1]]")).toEqual([]);
    });

    test('Returns empty array when no all round entry is found', () => {
        expect(solution("[[1,6,5,9,0,4],[1,1,2,1,4,5],[1,3,4,5,9,5,1,3],[3,4,5,3,1,4],[20]]")).toEqual([]);
    });

    test('Returns ordered array when all round entries are found', () => {
        expect(solution("[[1,6,5,9,0,4],[1,1,2,1,4,5],[1,6,5,6,7,5,4],[1,3,4,5,9,5,1,3],[3,4,5,3,1,4],[9,5,4,1]]")).toEqual([1,4,5]);
    });
});



