import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

window.componentState = null;

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newColor: 'black'
		};
		this.onChange = this.onChange.bind(this);

		console.dir(this);
	}

	onChange(e) {
		console.log('character typed');
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {

		window.componentState = this.state;

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
			<form>
				<label>
					New Color:
					<input type='text' name='newColor' value={this.state.newColor} onChange={this.onChange} />
				</label>
			</form>
		</div>;

		//return React.createElement('h1', null, 'Hello World!') React.createElement('h1', null, 'Hello World!');
	}

}

const widgets = [
	{ id: 1, name: 'Widget 1', description: 'A widget 1', color:'red', size: 'small', quantity: 2 },
	{ id: 2, name: 'Widget 2', description: 'A widget 2', color:'blue', size: 'medium', quantity: 4 }
];

class WidgetTable extends React.Component {

	render() {
		return <table className='table table-striped'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Description</th>
					<th>Color</th>
					<th>Size</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				{this.props.widgets.map(widget => <tr key={widget.id}>
					<td>{widget.id}</td>
					<td>{widget.name}</td>
					<td>{widget.description}</td>
					<td>{widget.color}</td>
					<td>{widget.size}</td>
					<td>{widget.quantity}</td>
				</tr>)}
			</tbody>
		</table>;
	}
}

ReactDOM.render(<HelloWorld items={colors} />,
	document.querySelector('main'));
