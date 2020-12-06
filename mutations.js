function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++) {
        if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
          return [arr, false]
        }
    }
    return [arr, true];
  }
  
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(mutation(["Mary", "Army"]))
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["Alien", "line"]))
console.log(mutation(["floor", "for"]))
console.log(mutation(["hello", "neo"]))
console.log(mutation(["voodoo", "no"]))
console.log(mutation(["ate", "date"]))
console.log(mutation(["Tiger", "Zebra"]))
console.log(mutation(["Noel", "Ole"]))
