import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  
};

export const Todoscontext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<{children: React.ReactNode;}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodohandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodohandler,
  };

  return (
    <Todoscontext.Provider value={contextValue}>
      {props.children}
    </Todoscontext.Provider>
  );
};

export default TodosContextProvider;
