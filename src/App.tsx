import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>();
  const [todos, setTodos] = useState<Todo[]>([]); //to show that it is an array of the interface Todo
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <DragDropContext onDragEnd={() => {}}>
    <div className="App">
      <h2 className="header">My Todo App</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
    </DragDropContext>
  );
};

export default App;
