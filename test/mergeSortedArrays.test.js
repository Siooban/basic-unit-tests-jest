const mergeSortedArrays = require("../src/mergeSortedArrays")

test('mergedSortedArrays case t1 bigger than t2', () => {

    expect(mergeSortedArrays([1, 3, 5] , [2,4])).toStrictEqual([1,2,3,4,5])
})

test('mergedSortedArrays case t1 smaller than t2', () => {

    expect(mergeSortedArrays([1,  10] , [2,4,11])).toStrictEqual([1,2,4,10,11])
})

test('mergedSortedArrays case t1 equals to t2', () => {

    expect(mergeSortedArrays([1, 3, 5] , [2,4,20])).toStrictEqual([1,2,3,4,5,20])
})

test('mergedSortedArrays case t1 and t2 have common value', () => {

    expect(mergeSortedArrays([1, 2, 5] , [2,4,20])).toStrictEqual([1,2,2,4,5,20])
})