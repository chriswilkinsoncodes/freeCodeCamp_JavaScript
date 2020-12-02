function titleCase(str) {
    let wordArr = str.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
      wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substr(1).toLowerCase()
    }
    str = wordArr.join(' ')
    return str;
  }
  
console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))