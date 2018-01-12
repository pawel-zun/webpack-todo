import React from 'react';
import style from './ToDoList.css';

class ToDoList extends React.Component {
  render() {
    return (
			<div className={style.ToDoList}>
				<h2 className={style.ToDoList__title}>List of things ToDo</h2>
				<ul className={style.ToDoList__list}>
					{this.props.getList}
				</ul>
			</div>
    );
  }
}

export default ToDoList;