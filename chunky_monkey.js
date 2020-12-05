function chunkArrayInGroups(arr, size) {
    let chunkArr = []
      for (let i = 0; i = Math.ceil(arr.length/size); i++) {
        chunkArr.push(arr.splice(0, size))
      }
    return chunkArr;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
