const fs = require('fs');

function readInput(path = "DaysInput/Day8.txt", encoding = "utf8" ) {
	return fs.readFileSync(path, { encoding });
};

const input = readInput();
const lines = input.split(/\r/).join("").split("\n");
const digits = lines.map(x => x.split(" | ")[0].split(" "));


let result = 0;
for(const inputDigits of digits) {
	for(const digit of inputDigits) {
		if([2, 3, 4, 7].includes(digit.length)) result += 1;
	};
};

