function doIt(a,b,c) {
	console.log('called do it!');
	console.log(a,b,c);
	console.dir(arguments);
}

doIt(1,2);

doIt.thisIsFun = true;

console.dir(doIt);

const fn = function() {
	console.log("called the function");
};

fn();

const fn2 = (param1,param2,param3) => param1 + param2 + param3;
