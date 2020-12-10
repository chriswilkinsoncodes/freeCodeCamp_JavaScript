#!/usr/bin/env node

const squareList = arr => {
    // Only change code below this line
    const squares = arr
        .filter(num => num > 0 && Number.isInteger(num))
        .map(num => num * num);
    return squares;
    // Only change code above this line
  };
  
console.log(squareList([-3, 4.8, 5, 3, -3.2]));
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));