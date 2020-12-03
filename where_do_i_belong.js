function getIndexToIns(arr, num) {
    let idx = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < num) {
        idx++
      }
    }
    return idx;
  }
  
console.log(getIndexToIns([40, 60], 50))
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
console.log(getIndexToIns([40, 60], 50))
console.log(getIndexToIns([3, 10, 5], 3))
console.log(getIndexToIns([5, 3, 20, 3], 5))
console.log(getIndexToIns([2, 20, 10], 19))
console.log(getIndexToIns([2, 5, 10], 15))
console.log(getIndexToIns([], 1))
