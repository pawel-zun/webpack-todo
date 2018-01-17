import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			desc: ''
		}

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({desc: event.target.value});
	}
	handleSubmit(event) {
    this.props.addNew(this.state.desc);
    event.preventDefault();
  }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Add a thing ToDo" value={this.state.desc} onChange={this.handleChange} />
				<input type="submit" value="Submit" onClick={this.handleSubmit} />
			</form>
		);
	}
}

export default TodoForm;