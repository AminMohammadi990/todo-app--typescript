import React, { useContext } from "react";

import classes from "./Todos.module.css";

import { Todoscontext } from "../store/todos-context";
import TodoItem from "./TodoItem";


const Todos: React.FC = () => {
  const todosCtx = useContext(Todoscontext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
