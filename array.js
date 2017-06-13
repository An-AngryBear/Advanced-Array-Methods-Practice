var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var newArray =
// Remove any integers greater than 19.
	integers.filter(function(item) {
		return item < 19;
	})
// Multiply each remaining number by 1.5 and then substract 1.
	.map(function(item) {
		return (item * 1.5) -1;
	})
// Sort the numbers in descending order (10, 9, 8, 7, etc).
	.sort(function(a, b) {
		return a-b;
	})
	.reverse()
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
	.reduce(function(acc, cur) {
		return acc + cur;
})

console.log(newArray);