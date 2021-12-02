const fs       = require('fs'      );
const readline = require('readline');

getInput('Day2/inputDay2.txt');

let dX  = 0;
let dY  = 0;
let aim = 0;

async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  
  for await (const line of readLine) {
    const curLine = line.split(" ");
    calcXY(curLine[0], parseInt(curLine[1]));    
  }
  // console.log(dX, dY, dX * dY);
  console.log(dX, aim, dX * aim);
}

function calcXY(_key, _val) {
  switch(_key) { 
    case "forward":
       dX  +=      _val; 
       aim += dY * _val;
       break;
    case "down": dY += _val; break;
    case "up"  : dY -= _val; break;
    default    : return;
  }
}



//let arr = []
// calculateXY();
// arr.push({[curLine[0]]: curLine[1]})
// async function calculateXY() {
//   await getInput();
//   arr.forEach(x => calculate(x));
//   console.log(dX, dY, dX * dY)
// }

// function calculate(_obj) {
//   const value = parseInt(Object.values(_obj));  
//   switch(Object.keys(_obj).toString()) { 
//     case "forward": dX += value; break;
//     case "down"   : dY += value; break;
//     case "up"     : dY -= value; break;
//     default       : return;
//   }
// }

