function fibonacci(num) {
// your code here
	let x=0;
	let y=1;
	while(num<=50){
	let z=x+y;
		x=y;
		y=z;
	}
console.log(x);
	return;
}

module.exports = fibonacci;
