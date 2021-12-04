const fs       = require('fs'      );
const readline = require('readline');
const { consumers } = require('stream');

getInput('DaysInput/Day4.txt');

let nums;
let bingoArr =[]
let isBingo  = false;
async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  
  let arr = [];
  let filtered = [];
  for await (const line of readLine) {
    console.log(line == "\r")
    arr.push(line.split(' '));  
  }
  // console.log(arr)

  nums = arr[0].pop().split(',');
  for (let i=0; i< arr.length; i++) {
    if (arr[i].length <= 1 ) continue;
    filtered.push(arr[i].filter(x=> x != ''))
  }
  
  let count = 0;
  while (count < filtered.length) {
    bingoArr.push(filtered.slice(count, count+5))
    count+=5;    
  }
  // while (!isBingo) drawning();
  drawning();
  

  
  
  
   
}



function bingo(_drawnNums) {
  // isBingo = true;
  // let markedNums = 
  // for (let i=0; i< filtered.length; i++) {
    
  // }
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