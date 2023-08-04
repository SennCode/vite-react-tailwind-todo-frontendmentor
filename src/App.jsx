import { useEffect, useState } from "react";
import Header from "./Header";
import TodoComputed from "./TodoComputed";
import TodoCreate from "./TodoCreate";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

// const initialStateTodos = [
//   {
//     id: 1,
//     title: "Go to the shop",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Study",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Go to the gym",
//     completed: true,
//   },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // esto devuelve todo lo contrario al id que le pasamos
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedTodo = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todos) => !todos.completed);
      case "completed":
        return todos.filter((todos) => todos.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="bg-[url(src/assets/images/bg-mobile-light.jpg)] min-h-screen bg-contain bg-no-repeat bg-gray-100
     dark:bg-gray-900 dark:bg-[url(src/assets/images/bg-mobile-dark.jpg)] md:bg-[url(src/assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(src/assets/images/bg-desktop-dark.jpg)] transition-all duration-500"
    >
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-xl ">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filterTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed
          computedTodo={computedTodo}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} />
      </main>
      {/* Footer */}
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-500">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;

// Código antes de hacer modularizar

// import IconCross from "./components/icons/IconCross";
// import IconMoon from "./components/icons/IconMoon";

// const App = () => {
//   return (
//     <div className="bg-[url(src/assets/images/bg-mobile-light.jpg)] min-h-screen bg-contain bg-no-repeat bg-gray-100">
//       {/* Header */}
//       <header className="container mx-auto px-4 pt-8">
//         <div className="flex justify-between">
//           <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.2em]">
//             Todo
//           </h1>
//           <button className="text-white">
//             <IconMoon />
//           </button>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 mt-8">
//         {/* TodoCreate */}
//         <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
//           <span className="rounded-full w-5 h-5 border-2 inline-block"></span>
//           <input
//             type="text"
//             placeholder="Create a new todo..."
//             className="w-full text-gray-400 outline-none"
//           />
//         </form>
//         {/* [&>article]:p-4 esto hace que los hijos hereden la propiedad, en este caso todos los article heredan el padding */}
//         {/* TodoList(TodoItem) TodoUpdate TodoDelete */}
//         <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
//           <article className="flex gap-4 border-b border-b-gray-400">
//             <button className="rounded-full w-5 h-5 border-2 inline-block flex-none"></button>
//             <p className="text-gray-500 grow">Complete online React course</p>
//             <button className="">
//               <IconCross />
//             </button>
//           </article>
//           <article className="flex gap-4 border-b border-b-gray-400">
//             <button className="rounded-full w-5 h-5 border-2 inline-block flex-none"></button>
//             <p className="text-gray-500 grow">Complete online React course</p>
//             <button className="">
//               <IconCross />
//             </button>
//           </article>
//           <article className="flex gap-4 border-b border-b-gray-400">
//             <button className="rounded-full w-5 h-5 border-2 inline-block flex-none"></button>
//             <p className="text-gray-500 grow">Complete online React course</p>
//             <button className="">
//               <IconCross />
//             </button>
//           </article>
//         </div>
//         {/* TodoComputed */}
//         <section className="px-4 py-4 flex justify-between bg-white rounded-b-md">
//           <span className="text-gray-400">5 items left</span>
//           <button className="text-gray-400">Clear completed</button>
//         </section>
//         {/* TodoFilter */}
//         <section className="container mx-auto">
//           <div className="bg-white mt-8 rounded-md py-4 flex justify-center gap-4">
//             <button className="text-blue-600">All</button>
//             <button className="hover:text-blue-600">Active</button>
//             <button className="hover:text-blue-600">Completed</button>
//           </div>
//         </section>
//       </main>
//       {/* Footer */}
//       <section className="pt-8">
//         <p className="text-center">Drag and drop to reorder list</p>
//       </section>
//     </div>
//   );
// };

// export default App;
