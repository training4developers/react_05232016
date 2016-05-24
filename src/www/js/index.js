import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

window.componentState = null;

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newColor: 'black',
			items: props.items.concat()
		};
		this.onChange = this.onChange.bind(this);
		this.addColor = this.addColor.bind(this);

		console.dir(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addColor() {
		const colors = this.state.items.concat(this.state.newColor);
		this.setState({
			items: colors
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
				{this.state.items.map(item => <li key={item}>{item}</li>)}
			</ul>
			<form>
				<label>
					New Color:
					<input type='text' name='newColor'
					value={this.state.newColor} onChange={this.onChange} />
				</label>
				<button type='button' onClick={this.addColor}>Add Color</button>
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

	constructor(props) {
		super(props);
		this.state = {
			newWidgetId: 0,
			newWidgetName: '',
			newWidgetDescription: '',
			newWidgetColor: '',
			newWidgetSize: '',
			newWidgetQuantity: 0,
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return <div>
			<table className='table table-striped'>
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
			</table>
			<form>
				<div>
					<label>
						Widget Id:
						<input type='text' name='newWidgetId'
						value={this.state.newWidgetId} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Name:
						<input type='text' name='newWidgetName'
						value={this.state.newWidgetName} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Description:
						<input type='text' name='newWidgetDescription'
						value={this.state.newWidgetDescription} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Color:
						<input type='text' name='newWidgetColor'
						value={this.state.newWidgetColor} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Size:
						<input type='text' name='newWidgetSize'
						value={this.state.newWidgetSize} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Quantity:
						<input type='text' name='newWidgetQuantity'
						value={this.state.newWidgetQuantity} onChange={this.onChange} />
					</label>
				</div>
			</form>
		</div>;
	}
}

ReactDOM.render(<HelloWorld items={colors} />,
	document.querySelector('main'));
