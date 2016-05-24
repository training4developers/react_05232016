import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

class HelloWorld extends React.Component {

	render() {

		// const items = [];
		//
		// this.props.items.forEach(function(item) {
		// 	items.push(<li key={item}>{item}</li>);
		// });

		return <div>
			<h1>Hello World!</h1>
			<ul>
				{this.props.items.map(item => <li key={item}>{item}</li>)}
			</ul>
		</div>;

		//return React.createElement('h1', null, 'Hello World!') React.createElement('h1', null, 'Hello World!');
	}

}

// class WidgetTable extends React.Component {
//
// 	render() {
// 		return <table className='table table-striped'>
// 			<thead>
// 				<tr>
// 					<th>ID</th>
// 					<th>Name</th>
// 					<th>Description</th>
// 					<th>Color</th>
// 					<th>Size</th>
// 					<th>Quantity</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 			</tbody>
// 		</table>;
// 	}
// }

ReactDOM.render(<HelloWorld items={colors} />,
	document.querySelector('main'));
