import React, { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
// modelの導入は、可読性を上げるため（後述)
import {ToDo1} from './todo.model';

const App: React.FC = () => {
  // ToDoの中身がidとtextなので、ここでは[]を代入。
  const [todos, setTodos] = useState<ToDo1[]>([]);
  

  const todoAdd = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      { id: Math.random().toString(), text: text }
      // これにより、{id: "0.8759291112629384", text: "宿題をする"}のようなデータをもつテキストが生成される。
    ]);
  };
  
  return (
    <div className="App">
      {/* AddTodo.tsxから渡されたテキストデータがここに入る*/}
      <AddTodo todoAdded={ todoAdd } />
      <Todo items={todos} />
    </div>
  );
}

export default App;