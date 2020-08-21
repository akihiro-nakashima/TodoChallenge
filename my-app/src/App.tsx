import React, {useState} from 'react';
import AddTask from './AddTask';
import DisplayTodo from './display'; 

const App: React.FC = () => {

  const [todo, setTodo] = useState<{id:number; text:string; time:string}[]>([]);
  
  const todoAdd = (inputText: string, inputTime: string) => {
    setTodo([...todo,
      {
        id: todo.length,
        text: inputText,
        time: inputTime,
      }
    ]);
  };
  
  return (
    <div className="App">
      <p className="title">ToDoアプリ</p>
      <AddTask  todoAdded= {todoAdd}/>
      <DisplayTodo items={todo}/>
    </div>
  );
}

export default App;