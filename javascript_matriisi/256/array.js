const matrix = () => {
	const length = 256;
	const loops = 1;
	let a = [];
	let b = [];
	let c = [];

	for (let i = 0; i < length; ++i) {
		a[i] = [];
		for (let j = 0; j < length; ++j) {
			a[i][j] = Math.floor(Math.random() * 1001);
		}
	}

	for (let i = 0; i < length; ++i) {
		b[i] = [];
		for (let j = 0; j < length; ++j) {
			b[i][j] = Math.floor(Math.random() * 1001);
		}
	}

	for (let i = 0; i < length; i++)
	{
		c[i] = [];
		for (let j = 0;j < length;j++)
		{
			c[i][j] = [];
		}
	}

	console.log('starting...');
	const time_begin = Date.now();
	for (let s = 0; s < loops; s++) {
		for (let i = 0; i < length; i++)
		{
			for (let j = 0; j < length; j++)
			{
				let sum = 0;
				for (let k = 0; k < length; k++)
				{
					sum += (a[i][k] * b[k][j]);
				}
				c[i][j] = sum;
			}
		}
	}

	const time_end = Date.now();
	document.getElementById('result').value = (time_end - time_begin) / 1000;
}