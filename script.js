function fibonacci(num) {
// your code here
	let x=0;
	let y=1;
	let z=x+y;
	while(z<num){
		x=y;
		y=z;
		z=x+y;
	}
	console.log(x);
}

module.exports = fibonacci;
