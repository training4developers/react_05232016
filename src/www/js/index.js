const parent = {
	amt: 1000,
	address: {
		city: 'Washington',
		state: 'DC'
	}
};

const child = Object.create(parent);
child.amt = 10;
child.address = {
	city: 'Paris'
};

console.log(child.amt);

console.dir(child);
