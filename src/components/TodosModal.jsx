import React from "react";

const TodosModal = ({ isOpen, todos, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="p-10">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full h-screen overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">ToDo's</h2>
          <ul className="list-none">
            {todos.map((todo) => (
              <li key={todo.id} className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className={`mr-2 h-5 w-5 rounded ${todo.completed ? 'bg-green-500' : 'bg-red-500'}`}
                />
                <div>
                  <h3 className="font-bold text-lg">{todo.title}</h3>
                  <p className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>
                    {todo.completed ? 'Completed' : 'Not Completed'}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-red-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodosModal;
