function doIt() {
	console.dir(this);
}

doIt();

var o = {
	id: 2,
	doIt: doIt
};

o.doIt();

console.log(doIt === o.doIt);

var t = {
	firstName: 'Bob',
	lastName: 'Martin',
	address : {
		street: '123 Oak Lane',
		city: 'Atlanta',
		state: 'GA',
		zipCode: '12345'
	},
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
};

var y = {
	firstName: 'Jim',
	lastName: 'Jackson',
	getFullName: t.getFullName

};

console.log(t.getFullName());
console.log(y.getFullName());
console.log(t.getFullName === y.getFullName);

t.getFullName.call({ id: 3, firstName: 'Suzy', lastName: 'Smith' }, 1,2,3);
t.getFullName.apply({ id: 3, firstName: 'Suzy', lastName: 'Smith' }, [1,2,3]);
const newFn = t.getFullName.bind({ id: 3, firstName: 'Suzy', lastName: 'Smith' });
