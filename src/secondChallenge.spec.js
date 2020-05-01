import {
    areaCount,
    continues,
    hasAdjacent,
    getEast,
    hasEast,
    getSouth,
    hasSouth,
    solution
} from './secondChallenge';

describe('Test hasSouth function', () => {
    test('One row matrix has no south', () => {
        expect(hasSouth(0, [])).toBeFalsy();
    });

    test('Not last row has south', () => {
        expect(hasSouth(1, [[],[],[]])).toBeTruthy();
    });

    test('Last row has no south', () => {
        expect(hasSouth(3, [[],[],[]])).toBeFalsy();
    });
});

describe('Test hasEast function', () => {
    test('One column matrix has no east', () => {
        expect(hasEast(0, [[]])).toBeFalsy();
    });

    test('Not last column has east', () => {
        expect(hasEast(1, [[1,3,2],[1,1,1]])).toBeTruthy();
    });

    test('Last column has no east', () => {
        expect(hasEast(3, [[1,3,2],[1,1,1]])).toBeFalsy();
    });
});

describe('Test getSouth function', () => {
    test('Obtains correct south neighbour', () => {
        expect(getSouth(0, 0, [[1,3,2],[1,5,1]])).toEqual(1);
        expect(getSouth(0, 1, [[1,3,2],[1,5,1]])).toEqual(5);
        expect(getSouth(0, 2, [[1,3,2],[1,5,1]])).toEqual(1);
    });
});

describe('Test getSouth function', () => {
    test('Obtains correct east neighbour', () => {
        expect(getEast(0, 0, [[1,3,2],[1,5,1],[3,4,7]])).toEqual(3);
        expect(getEast(1, 0, [[1,3,2],[1,5,1],[3,4,7]])).toEqual(5);
        expect(getEast(2, 0, [[1,3,2],[1,5,1],[3,4,7]])).toEqual(4);
        expect(getEast(0, 1, [[1,3,2],[1,5,1],[3,4,7]])).toEqual(2);
        expect(getEast(1, 1,[[1,3,2],[1,5,1],[3,4,7]])).toEqual(1);
        expect(getEast(2, 1, [[1,3,2],[1,5,1],[3,4,7]])).toEqual(7);
    });
});

describe('Test continues function', () => {
    test('One identical neighbour in the progress direction means that area continues', () => {
        expect(continues(2, 1, 2)).toBeTruthy();
    });

    test('Two identical neighbours in the progress direction means that area continues', () => {
        expect(continues(3, 3, 3)).toBeTruthy();
    });

    test('No identical neighbours in the progress direction means that area is not adjacent to similar neighbour', () => {
        expect(continues(1, 6, 2)).toBeFalsy();
    });
});

describe('Test hasAdjacent function', () => {
    test('Horizontal adjacent neighbour is found', () => {
        expect(hasAdjacent(1, 0, [[1, 1], [2, 2], [3, 3]])).toBeTruthy();
    });

    test('Vertical adjacent neighbour is found', () => {
        expect(hasAdjacent(0, 0, [[1, 1], [1, 2], [3, 3]])).toBeTruthy();
    });

    test('No adjacent neighbour return false', () => {
        expect(hasAdjacent(1, 1, [[1, 1], [2, 4], [3, 3]])).toBeFalsy();
    });
});

describe('Test areaCount function', () => {
    test('Distinct neighbours increment area count', () => {
        expect(areaCount(1, 0, [[1, 1], [2, 4], [3, 3]])).toEqual(1);
    });

    test('Identical neighbours do not increment area count', () => {
        expect(areaCount(0, 0, [[1, 1], [1, 2], [3, 3]])).toEqual(0);
    });
});

describe('Test solution function', () => {
    test('One column matrix of two rows with distinct elements finds two areas', () => {
        expect(solution([[1], [2]])).toEqual(2);
    });

    test('One row matrix of two columns with distinct elements finds two areas', () => {
        expect(solution([[1, 2]])).toEqual(2);
    });

    test('One column matrix of same elements finds one area', () => {
        expect(solution([[1], [1], [1]])).toEqual(1);
    });

    test('One row matrix of same elements is handled properly', () => {
        expect(solution([[1,1,1]])).toEqual(1);
    });

    test('Empty matrix founds zero areas', () => {
        expect(solution([[], [], []])).toEqual(0);
    });

    test('Multiple row and columns matrices with multiple areas return successfully', () => {
        expect(solution([[5, 7, 7], [7, 3, 7], [3, 2, 7], [1, 3, 4], [1, 4, 4], [4, 1, 1]])).toEqual(11);
        expect(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(9);
        expect(solution([[1, 1, 1], [2, 2, 2], [3, 3, 3]])).toEqual(3);
        expect(solution([[0, 0], [0, 0]])).toEqual(1);
        expect(solution([[7, 10], [12, 14]])).toEqual(4);
    });
});
