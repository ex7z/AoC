const fs       = require('fs'      );
const readline = require('readline');

getInput('DaysInput/Day3.txt');

async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  

  let arr = [];
  for await (const bit of readLine) {
    const bitsArr = [];
    for (let  i=0; i < bit.length; i++) bitsArr.push(bit[i]);
    arr.push(bitsArr);
  }

  getGammaEpsilon(arr)
  getOxygen(arr, 0, true );
  const gen = parseInt(finalRes, 2);
  getOxygen(arr, 0, false);
  const scrub = parseInt(finalRes, 2);  
  console.log(gen * scrub)
  
}

 
let finalRes = "";
function getOxygen(_arr, _count, _is_gen = true) {  
  let col = "";  
  
  for (let i = 0; i< _arr.length; i++) {    
    col+=_arr[i][_count];
    if (col.length == _arr.length) {
      _arr = _arr.filter(x => {    
        countOf0 = col.split('0').length-1;
        countOf1 = col.split('1').length-1;
        if (_is_gen) {
          if (countOf0 == countOf1) return x[_count] != "0";
          else return (countOf0 < countOf1) ? x[_count] != "0" : x[_count] != "1"
        } else {
          if (countOf0 == countOf1) return x[_count] != "1";
          else return (countOf0 < countOf1) ? x[_count] != "1" : x[_count] != "0"
        }
      });  
    }

    if (i > _arr.length -1 && _arr.length > 1) getOxygen(_arr, _count + 1, _is_gen)
  }
  
  if (_arr.length == 1) {
    let res = "";
    for (let i=0; i< _arr[0].length; i++) {
      res += _arr[0][i];
    }
    finalRes = res; 
  }
}

// ---------------------------------------------------------------------------------->

function getGammaEpsilon(_arr) {
  let obj = {};  
  for (let i = 0; i< _arr[i].length; i++) {
    _arr.map(x => {       
      if (x[i] == "0") obj[i.toString()] += x[i];     
      else             obj[i.toString()] += x[i];     
    })
  }

  let gamma   = "";
  let epsilon = "";
  Object.keys(obj).map(x => {
    const countOf0 = obj[x].split('0').length-1;
    const countOf1 = obj[x].split('1').length-1;
    gamma   += countOf0 < countOf1 ? "1" : "0";
    epsilon += countOf0 < countOf1 ? "0" : "1";
  })

  const gammeToBinary   = parseInt(gamma  , 2);
  const epsilonToBinary = parseInt(epsilon, 2);

  console.log(gamma        );
  console.log(gammeToBinary);
  
  console.log(epsilon        );
  console.log(epsilonToBinary);

  console.log(gammeToBinary * epsilonToBinary);
}