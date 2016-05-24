

function outer() {

	var t = 'Angela';

	setTimeout(function() {
		t = 'Amy';
	}, 2000);

	return function inner() {
		console.log(t);
	};
}

var fn = outer();
fn();

setTimeout(function() {
	fn();
}, 4000);

//console.dir(fn);
