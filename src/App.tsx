import React, { FC, useState } from 'react';
import './App.css';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import { ITask } from './Interfaces';

const App: FC = () => {

  const [todoList, setTodoList] = useState<ITask[]>([]);

  console.log("In app", todoList)
  return (
    <div className="App bg-slate-600">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
