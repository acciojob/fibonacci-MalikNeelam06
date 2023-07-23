function fibonacci(num) {
// your code here
	let x=0;
	let y=1;
	let z=x+y;
	while(z<num){
		console.log(z);
		x=y;
		y=z;
	}
}

module.exports = fibonacci;
