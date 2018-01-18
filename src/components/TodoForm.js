import React from 'react';
import style from './TodoForm.css';

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
    event.preventDefault();
		if (this.state.desc) {
			this.props.addNew(this.state.desc);
			this.setState({desc: ''});
		}
  }
	render() {
		return (
			<form onSubmit={this.handleSubmit} className={style.TodoForm}>
				<input type="text" placeholder="Add a thing ToDo" value={this.state.desc} onChange={this.handleChange} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default TodoForm;