function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice)
  
    // Only change code above this line
  }
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1))
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4))
