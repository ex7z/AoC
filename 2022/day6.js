const fs     = require('fs'      );
const inputs = fs.readFileSync("./DaysInput/Day6.txt").toString();

// const inputs = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw" // part1
// const inputs = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw" // part2

function part1() {
  let arr = [];
  let isMarker = false; 
  for (let i = 0; i< inputs.length; i++) {  
    arr.push(inputs[i]);  
    if (arr.length < 4) continue;
    for (let j = 0; j< arr.length; j++) {
      for (let k = j + 1; k< arr.length; k++) {  
        if (arr[j] == arr[k]) {
          arr = arr.slice(j+1);
          break;
        }
      }  

      if (j == arr.length -1 && arr.length == 4) { 
        console.log(i + 1);
        isMarker = true;
      }    
    }
    if (isMarker) break;
  }
}

function part2() {
  let arr = [];
  let isMarker = false; 
  for (let i = 0; i< inputs.length; i++) {  
    arr.push(inputs[i]);  
    if (arr.length < 14) continue;
    for (let j = 0; j< arr.length; j++) {
      for (let k = j + 1; k< arr.length; k++) {  
        if (arr[j] == arr[k]) {
          arr = arr.slice(j+1);
          break;
        }
      }  

      if (j == arr.length -1 && arr.length == 14) { 
        console.log(i + 1);
        isMarker = true;
      }    
    }
    if (isMarker) break;
  }
}

//part1();
part2();



