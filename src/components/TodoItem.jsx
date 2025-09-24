export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`flex justify-between items-center px-4 py-2 border rounded-lg shadow-sm ${
        todo.completed ? "bg-green-100 line-through" : "bg-white"
      }`}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        className="cursor-pointer flex-1"
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}
