function mergeSortedArrays(t1, t2){
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (t1.length + t2.length)) {

        let isArr1Depleted = index1 >= t1.length;
        let isArr2Depleted = index2 >= t2.length;

        if (!isArr1Depleted && (isArr2Depleted || (t1[index1] < t2[index2]))) {
            merged[current] = t1[index1];
            index1++;
        } else {
            merged[current] = t2[index2];
            index2++;
        }

        current++;
    }

    return merged;
}
console.log(mergeSortedArrays([1, 3, 5] , [2,4]))
module.exports=mergeSortedArrays