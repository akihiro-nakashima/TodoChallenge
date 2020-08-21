import React, {useState} from 'react';
import {useRef} from 'react'; 
import './App.css';

type AddTodoProps = {
  todoAdded: (todoText: string, timeText: string) => void;
}

const AddTask: React.FC<AddTodoProps> = (props) => {
	const textInputRefTodo = useRef<HTMLInputElement>(null);
	const textInputRefTime = useRef<HTMLInputElement>(null);

	const setform = (event: React.FormEvent) =>{
    
    event.preventDefault();
    props.todoAdded(textInputRefTodo.current!.value, textInputRefTime.current!.value);  
  }

	return(
		<div className="App-form">
			<form  onSubmit={setform}>
				<input id="title" placeholder="タスク名" ref={textInputRefTodo}/>
				<input id="time" placeholder="mmdd" ref={textInputRefTime}/>   
			<div>
				<button type="submit">登録</button>
			</div>
			</form>
		</div>
		 
	);
}

export default AddTask;