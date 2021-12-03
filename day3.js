const fs       = require('fs'      );
const readline = require('readline');

getInput('DaysInput/Day3.txt');

async function getInput(_file) { 
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });  

  const arr = [];
  for await (const bit of readLine) {
    const bitsArr = [];
    for (let  i=0; i < bit.length; i++) bitsArr.push(bit[i]);
    arr.push(bitsArr);
  }

  let obj = {};  
  for (let i = 0; i< arr[i].length; i++) {
    arr.map(x => {       
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

 


