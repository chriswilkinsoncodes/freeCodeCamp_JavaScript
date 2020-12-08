#!/usr/bin/env node

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let sortedArray = arr.slice()
    return sortedArray.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // Only change code above this line
}
console.log('sorted:',nonMutatingSort(globalArray), 'original:', globalArray);

let arr2 = ["a", "d", "c", "a", "z", "g"];
console.log('sorted:',nonMutatingSort(arr2), 'original:', arr2);

let arr3 = ["x", "h", "a", "m", "n", "m"]
console.log('sorted:',nonMutatingSort(arr3), 'original:', arr3);

let arr4 = ["a", "a", "a", "a", "x", "t"]
console.log('sorted:',nonMutatingSort(arr4), 'original:', arr4);