class BasePerson {
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

class Person extends BasePerson {

	constructor(firstName, lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}

}

function BasePerson2() {

}

BasePerson2.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
};

function Person2(firstName, lastName) {
	this._super.call(this);
	this.firstName = firstName;
	this.lastName = lastName;
}

Person2.prototype = Object.create(BasePerson2.prototype);
Person2.prototype.constructor = Person2;
Person2.prototype._super = BasePerson2;

var person = new Person('Mahatma','Gandhi');
console.log(person.getFullName());

console.dir(person);

var person2 = new Person2('Osama','Bin Laden');
console.log(person2.getFullName());

console.dir(person2);

console.log(typeof Person);
console.log(typeof Person2);
