function splitify(str) {
    // Only change code below this line
    let byNonLetter = str.split(/[,-.\s]/)
    return byNonLetter
    // Only change code above this line
  }
console.log(splitify("Hello World,I-am code"));
console.log(splitify("Earth-is-our home"));
console.log(splitify("This.is.a-sentence"));
  