const fs       = require('fs'      );
const readline = require('readline');

getInput('DaysInput/Day6.txt');

let inputs;
async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  

  
  for await (const line of readLine) {
    inputs = line.split(',').map(n => parseInt(n))
  }
  
  let count = 0

  inputs.forEach(x => {
    count += reproduceDays(x, 80)
  })
  console.log(count);
  
  let count2 = 0
  inputs.forEach(x => {
    count2 += reproduceDays(x, 256)
  })
  console.log(count2);

  // simulation(arr)
}

let obj = {}
function reproduceDays(start, days) {
  const startDays = start.toString() + days.toString();
  
  if (!obj[startDays]) {
    let count = 1;
    let next  = days - start;

    while (next > 0) {
      count   += reproduceDays(8, next - 1);
      next -= 7;
    }
    obj[startDays] = count;
  }

  return obj[startDays];
}



function simulation(_arr) {
  let newFish = 9;
  for (let i=0; i< _arr.length; i++) {
    if (_arr[i] == 0) {
      _arr.push(newFish);
      _arr[i] = 7;
    } 
    _arr[i] -= 1;
  }  
  console.log(_arr.length)
}