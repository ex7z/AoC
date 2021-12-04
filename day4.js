const fs       = require('fs'      );
const readline = require('readline');
const { consumers } = require('stream');

getInput('DaysInput/Day4.txt');

let nums = [];
let bingoArr =[]
let isBingo  = false;

async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  

  let countLine = 0;
  let arr = [];
  let filtered = [];
  for await (const line of readLine) {
    if (countLine == 0) { 
      nums.push(line);
      ++countLine;
      continue;
    }   
    if (line.length > 0) arr.push(line.split(' '))   
  }

  for (let i=0; i< arr.length; i++) {
    if (arr[i].length <= 1 ) continue;
    filtered.push(arr[i].filter(x=> x != ''))
  }
    
  let count = 0;
  while (count < filtered.length) {
    bingoArr.push(filtered.slice(count, count+5))
    count+=5;
  } 
  
  // // while (!isBingo) drawning();
  drawning();
}



function bingo(_drawnNums) {
  const mark = "@";
  for (let i =0; i< bingoArr.length; i++) {
    for (let j=0; j< bingoArr[i].length; j++) {
      for (let k=0; k < bingoArr[i].length; k++) {
        if (bingoArr[i][j][k] == '22') bingoArr[i][j][k] += '@';      
      }      
    }
  }
  
  console.log(bingoArr)
  // isBingo = true;
  
}

let curNum =0;
function drawning() {
  let count  = 5 + curNum;
  let drawnNums = [];
  for (let i=curNum; i< count; i++) {
    if (nums[i] && nums[i] != undefined) {
      drawnNums.push(nums[i]);
      curNum++;
    }
   }
   bingo(drawnNums)
}