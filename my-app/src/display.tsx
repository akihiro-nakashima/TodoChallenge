import React from 'react';
import './App.css';

interface todos{
    items: {id:number; text:string; time:string}[]
};

const DisplayTodo: React.FC<todos> = (props) =>{

    return(
		<div className="disp">
      		<ul>
				{props.items.map(todo => (
					<li  key={todo.id}>
						{todo.text} {todo.time}
					</li>))}
			</ul>  
		</div>
    );
} 

export default DisplayTodo;