import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo, handleDragEnd }) => {
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(droppableProvided) => (
                    <div
                        className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                    >
                        {todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                draggableId={`${todo.id}`}
                                index={index}
                            >
                                {(provided) => (
                                    <TodoItem
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
