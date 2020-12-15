function spinalCase(str) {
    let dashedStr = str
      .replace(/([A-Z])/g," $1")
      .trim()
      .replace(/ +/g, '-')
      .toLowerCase()
      .replace(/_/g, '')
  
       return dashedStr;
  }
  
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('TheAndyGriffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
