const TodoComputed = ({computedTodo, clearCompleted}) => {
  return (
    <section className="px-4 py-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-500">
      <span className="text-gray-400  ">{computedTodo} items left</span>
      <button className="text-gray-400 " onClick={() => clearCompleted()}>Clear completed</button>
    </section>
  );
};

export default TodoComputed;
