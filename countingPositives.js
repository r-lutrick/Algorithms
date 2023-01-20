// Count all positive numbers including 0
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++) {
    // What conditional goes here?
    if (numbers[i] >= 0) {
        countPositives++
    }
}

console.log("there are " + countPositives + " positive values");