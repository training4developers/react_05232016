var t = {
	id: 2,
	outer: function() {

		console.log(this);

		var that = this;

		// const inner = (function () {
		// 	console.log(this);
		// }).bind(this);

		const inner = () => {
			console.log(this);
		};

		inner();

	}
};

t.outer();
