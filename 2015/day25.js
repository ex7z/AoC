const fs       = require('fs'      );
const readline = require('readline');

async function part1() { 
  const row = 3010;
  const col = 3019;

  let   n1 = 20151125;
  const n2 = 252533;
  const n3 = 33554393;

  const n4 = n1 * n2 % n3;
  let arr = [[]]
  
  for (let i = 0; i < 5; i++) {    
    arr.push([])
    for (let j = 0; j <= i; j++) {           
           if (i == 0 && j == 0) arr[0][0] = n1;      
      else if (i == 1 && j == 0) arr[i][j] = n4;
      else {
        
      }
    }
  }

  console.log(arr);
  
}
part1();