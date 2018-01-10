import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
    	<div className={style.Title}>
	    	<h1 className={style.Title__headline}>{this.props.headline}</h1>
	    	<p className={style.Title__tasks}>There are: <span className={style.Title__tasks_number}>{this.props.howMany}</span> tasks to complete.</p>
    	</div>
    );
  }
}

export default Title;