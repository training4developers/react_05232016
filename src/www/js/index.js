import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

class ItemApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat()
		};
		this.itemAppAddItem = this.itemAppAddItem.bind(this);
	}

	itemAppAddItem(newItem) {
		this.setState({
			items: this.state.items.concat(newItem)
		});
	}

	render() {

		return <div>
			<ItemList items={this.state.items} />
			<ItemForm itemFormAddItem={this.itemAppAddItem} />
		</div>


	}

}

// class ItemList extends React.Component {
//
// 	static get propTypes() {
// 		return {
// 			items: React.PropTypes.array.isRequired
// 		};
// 	}
//
// 	render() {
//
// 		return <ul>
// 			{this.props.items.map(item => <li key={item}>{item}</li>)}
// 		</ul>;
// 	}
//
// }

const ItemList = props => <ul>
	{props.items.map(item => <li key={item}>{item}</li>)}
</ul>;

// function ItemList(props) {
// 	return <ul>
// 		{this.props.items.map(item => <li key={item}>{item}</li>)}
// 	</ul>;
// }

class ItemForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newItem: ''
		};
		this.onChange = this.onChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addItem() {
		this.props.itemFormAddItem(this.state.newItem);
	}

	render() {
		return <form>
			<label>
				New Item:
				<input type='text' name='newItem'
				value={this.state.newItem} onChange={this.onChange} />
			</label>
			<button type='button' onClick={this.addItem}>Add Item</button>
		</form>;
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
			newWidget: {
				id: 0,
				name: '',
				description: '',
				color: '',
				size: '',
				quantity: 0
			}
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			newWidget: Object.assign({},
				this.state.newWidget,
				{ [e.target.name]: e.target.value })
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
						<input type='text' name='id'
						value={this.state.newWidget.id} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Name:
						<input type='text' name='name'
						value={this.state.newWidget.name} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Description:
						<input type='text' name='description'
						value={this.state.newWidget.description} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Color:
						<input type='text' name='color'
						value={this.state.newWidget.color} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Size:
						<input type='text' name='size'
						value={this.state.newWidget.size} onChange={this.onChange} />
					</label>
				</div>
				<div>
					<label>
						Widget Quantity:
						<input type='text' name='quantity'
						value={this.state.newWidget.quantity} onChange={this.onChange} />
					</label>
				</div>
				<button type='button'>Add Widget</button>
			</form>
		</div>;
	}
}

ReactDOM.render(<ItemApp items={colors} />,
	document.querySelector('main'));
