import IconCross from "./components/icons/IconCross";
import IconCheck from "./components/icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(
  ({ todo, removeTodo, updateTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
      <>
        <article
          {...props}
          ref={ref}
          className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 "
        >
          <button
            className={`rounded-full w-5 h-5 border-2 flex-none
          ${
            completed
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
              : "inline-block"
          }`}
            onClick={() => updateTodo(id)}
          >
            {completed && <IconCheck />}
          </button>
          <p
            className={`text-gray-500 transition-all duration-500 dark:text-gray-300 grow ${
              completed && "line-through"
            }`}
          >
            {title}
          </p>
          <button className="flex-none" onClick={() => removeTodo(id)}>
            <IconCross />
          </button>
        </article>
      </>
    );
  }
);

export default TodoItem;
