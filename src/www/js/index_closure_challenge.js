var x=0,y=0,funcs = [];

for (; x<5; x++) {
	const b = x;
	funcs.push(function() {
		console.log(b);
	});
}

for (; x<5; x++) {
	(function(b) {
		funcs.push(function() {
			console.log(b);
		});
	})(x);
}



// for (; x<5; x++) {
// 	// only edit code between here
// 	// you cannot use y
// 	// console.log cannot evaluated in the first loop
// 	funcs.push(function() {
// 		console.log(x);
// 	});
// 	// and here
// }

for (; y<5; y++) {
	funcs[y]();
}

// 0
// 1
// 2
// 3
// 4
