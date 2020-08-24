import React, {useState} from 'react';
import {useRef} from 'react'; 
import './App.css';


type AddTodoProps = {
  todoAdded: (todoText: string, timeText: string) => void;
}

const AddTask: React.FC<AddTodoProps> = (props) => {
	const taskName = useRef<HTMLInputElement>(null);
	const deliveryDate = useRef<HTMLInputElement>(null);

	const setform = (event: React.FormEvent) =>{
		
		event.preventDefault();
		
		
		//入力データを扱いやすい変数に代入
		const taskNameValue = taskName.current!.value;
		const deliveryDateValue = deliveryDate.current!.value;
		const taskNameLength = taskName.current!.value.length;
		//入力データの文字数確認
		if(taskNameLength >20){
			window.alert("タスク名は20文字以内で入力して下さい");
			return;
		}
		//タスク締め切りの入力形式チェック
		if(!deliveryDate.current!.value.match(/^\d{4}-\d{2}-\d{2}$/))
		{
			window.alert("yyyy-mm-dd形式で入力して下さい");
			return;
		}
		//入力データの格納
		props.todoAdded(taskNameValue, deliveryDateValue);  
		
	
  }

	return(
		<div className="App-form">
			<form  onSubmit={setform}>
				<input id="title" placeholder="タスク名" ref={taskName} required/>
				<input id="time" placeholder="yyyy-mm-dd" ref={deliveryDate} /*pattern="\d{4}-\d{2}-\d{2}"*//>   
			<div>
				<button type="submit">登録</button>
			</div>
			</form>
		</div>
		 
	);
}

export default AddTask;