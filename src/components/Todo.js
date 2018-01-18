import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
	render() {
		return (
			<li onClick={ () => this.props.removeItem(this.props.item.id) } title="Click to delete" className={style.listItem}>
				{this.props.item.text}
			</li>
		);
	}
}

export default Todo;

