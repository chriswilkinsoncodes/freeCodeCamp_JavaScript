function sentensify(str) {
    // Only change code below this line
    let byNonLetter = str.split(/[,-.\s]/)
    return byNonLetter.join(" ")
  
    // Only change code above this line
  }
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));