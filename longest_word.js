function findLongestWordLength(str) {
    let sStr = str.split(" ");
    let longest = 0;
    for (let i = 0; i < sStr.length; i++) {
      if (sStr[i].length > longest) {
        longest = sStr[i].length;
      }
    }
    return longest;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));