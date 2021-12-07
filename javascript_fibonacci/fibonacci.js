const test = () => {
	const fib = x => {
		if ((x == 1) || (x == 0)) {
			return x;
		}
		else {
			return fib(x - 1) + fib(x - 2);
		}
	}

	const time_begin = Date.now();
	fib(44);
	const time_end = Date.now();
	document.getElementById('result').value = (time_end - time_begin) / 1000;
}