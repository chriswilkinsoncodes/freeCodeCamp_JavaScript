function bouncer(arr) {
    let arrTrue = []
    for (let i = 0; i < arr.length; i++) {
      if (Boolean(arr[i]) == true) {
        arrTrue.push(arr[i])
  
      }
  
    }
    return [arr, arrTrue];
  }
  
console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer(["a", "b", "c"]))
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
console.log(bouncer([null, NaN, 1, 2, undefined]))
