class BasePerson {
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

const Person = class extends BasePerson {

};

class Person extends BasePerson {

	static createPerson(name) {
		var tokens = name.split(' ');
		return new Person(tokens[0], tokens[1]);
	}

	get firstName() {
		console.log('getting first name');
		return this._firstName;
	}

	set firstName(fn) {
		console.log('setting first name');
		this._firstName = fn;
	}

	constructor(firstName, lastName) {
		super();
		this._firstName = firstName;
		this._lastName = lastName;
	}

}

var person = new Person('Mahatma','Gandhi');

Object.defineProperty(person, 'lastName', {
	configurable: true,
	enumerable: true,
	get: function() {
		console.log('getting last name');
		return this._lastName;
	},
	set: function(value) {
		console.log('setting last name');
		this._lastName = value;
	}
});

person.lastName = 'Rogers';

console.log(person.firstName);
person.firstName = 'Kelly';
console.log(person.getFullName());


console.dir(Person.createPerson('Jennifer Lawrence'));
