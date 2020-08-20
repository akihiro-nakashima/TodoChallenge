import React, {useState} from 'react';
import {useRef} from 'react'; 

function App() {

  const [todo, setTodo] = useState<{id:number; text:string; time:string}[]>([]);
  
  const textInputRefTodo = useRef<HTMLInputElement>(null);
  const textInputRefTime = useRef<HTMLInputElement>(null);
  
  const setTask = (event: React.FormEvent) =>{
    
    event.preventDefault();
    setTodo([...todo,
      {
        id: todo.length,
        text:textInputRefTodo.current!.value,
        time:textInputRefTime.current!.value
      }]);  
  }

  return (
    <div className="App">
      <form className="App-form" onSubmit={setTask}>
        <div>
          <input id="title" placeholder="タスク名" ref={textInputRefTodo}/>
          <input id="time" placeholder="mmdd" ref={textInputRefTime}/>   
        </div>

        <div>
          <button type="submit">登録</button>
        </div>
      </form>
      <div>
        <ul>
          {todo.map(todo => (<li key={todo.id}>{todo.text} {todo.time}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;