const fs = require('fs');

const input = fs.readFileSync('./2015/DaysInput/Day1.txt', { encoding: 'utf8', flag: 'r' }); 

async function part1() { 
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input[i] === '(' ? 1 : -1;
  }
  console.log(floor); // for part1  
}

async function part2() { 
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input[i] === '(' ? 1 : -1;
    if (floor === -1) {
      console.log(i+1); // for part2 as inptu starts from 1
      break;
    }
  }
}
// part1();
part2();  