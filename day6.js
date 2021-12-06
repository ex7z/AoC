const fs       = require('fs'      );
const readline = require('readline');

getInput('DaysInput/Day6.txt');

async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  

  let arr;
  for await (const line of readLine) {
    arr = line.split(',').map(n => parseInt(n))
  }
  for (i=0; i< 80; i++) {
    simulation(arr)
  }
}


function simulation(_arr) {
  let turn = 0;
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