import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoForm from '../components/TodoForm';
import ToDoList from '../components/ToDoList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					text: 'clean room'
				}, {
					id: 2,
					text: 'wash the dishes'
				}, {
					id: 3,
					text: 'feed my dog'
				}, {
					id: 4,
					text: 'make dinner'
				}
			]
		};
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	getElements() {
		return this.state.data.map( (el, id) => <li key={el.id}>{el.text}</li>);
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<div className={style.TodoApp__container}>
					<Title headline="What are you going ToDo?" howMany={this.state.data.length} />
					<ToDoList getList={this.getElements()} />
					<TodoForm addNew={this.addTodo} />
				</div>
			</div>
		);
	}
}

export default App;