import React from 'react';
import './App.css';

interface todos{
    items: {id:number; text:string; time:string}[]
};

const DisplayTodo: React.FC<todos> = (props) =>{

    return(
			<div className="disp">
      <ul>
				{props.items.map(items => (
					<li  key={items.id}>
						{items.text} {items.time}
					</li>))}
			</ul>  
			</div>
    );
} 

export default DisplayTodo;