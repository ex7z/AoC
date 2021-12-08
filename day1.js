const fs       = require('fs'      );
const readline = require('readline');

// getInputP1('DaysInput/Day1.txt');
getInputP1('DaysInput/Day1.txt');

async function getInputP1(_file) { 
  let inputs = [];
  const fileStream = fs.createReadStream(_file);
  const readLine   = readline.createInterface({ input: fileStream });    

  for await (const line of readLine) {
    inputs.push(parseInt(line))
  }

   
  // p1
  let count = 0
  for (let i=0; i< inputs.length; i++) {
    if (i == 0) continue;    
    if (inputs[i] > inputs[i- 1]) count++;
  }
  // console.log(count)

  // p2
  let sum = []
  for (let i=0; i< inputs.length; i++) {
    if (isNaN(inputs[i + 2])) break;
    sum.push(inputs[i] + inputs[i+1] + inputs[i + 2])
  }
 
  let count2 = 0;
  for (let i=0; i< sum.length; i++) {
    if (i == 0) continue;    
    if (sum[i] > sum[i- 1]) count2++;
  }
  console.log(count2)
}
