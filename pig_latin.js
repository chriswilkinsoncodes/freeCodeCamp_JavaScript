function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(str[0])) return str + "way";
  
  var front = [];
  str = str.split('');
  while (str.length && !vowels.includes(str[0])) {
    front.push(str.shift());
  }
  return str.concat(front).join('') + 'ay';
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
