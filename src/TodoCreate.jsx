import { useState } from "react";
import Swal from "sweetalert2";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    console.log(title);
    if (!title.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar una tarea nueva.',
      });
      return setTitle("")
    }
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `Tarea "${title.toUpperCase()}" creada correctamente`,
      showConfirmButton: false,
      timer: 1500
    })
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 dark:bg-gray-800 transition-all duration-500"
      onSubmit={handleSubmitAddTodo}
    >
      <span className="rounded-full w-5 h-5 border-2 inline-block"></span>
      <input
        name="title"
        value={title}
        type="text"
        placeholder="Create a new task..."
        className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-500"
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
