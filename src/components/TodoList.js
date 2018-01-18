import React from 'react';
import Todo from '../components/Todo';
import style from './ToDoList.css';

class ToDoList extends React.Component {
  render() {
    return (
			<div className={style.ToDoList}>
				<h2 className={style.ToDoList__title}>List of things ToDo</h2>
				<ul className={style.ToDoList__list}>
					{this.props.data.map(item => <Todo key={item.id} item={item} removeItem={this.props.removeItem}/> )}
				</ul>
			</div>
    );
  }
}

export default ToDoList;