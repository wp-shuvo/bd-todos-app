export default function TodoItem({ todo, refreshTodos }) {
  const { _id, title, description, isComplited } = todo;

  // Toggle completion
  const handleUpdate = async (id) => {
    try {
      const updatedData = {
        title,
        description: description || "",
        complited: !isComplited, // toggle completion
      };

      const res = await fetch(`http://localhost:5002/item/update/${id}`, {
        method: "PATCH", // or PATCH if your backend accepts PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const result = await res.json();
      console.log("Todo updated:", result);

      // Refresh todos in parent component
      if (refreshTodos) refreshTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Soft delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5002/item/soft-delete/${id}`, {
        method: "DELETE", // soft delete is usually a PUT
      });

      const result = await res.json();
      console.log("Todo deleted:", result);

      // Refresh todos in parent component
      if (refreshTodos) refreshTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="flex justify-between w-full items-center px-4 py-2 border rounded-lg shadow-sm bg-white">
      {/* Left side - Title */}
      <div>
        <h1 className="flex-1 font-medium">{title}</h1>
      </div>

      {/* Right side - Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => handleUpdate(_id)}
          className="px-3 py-1 text-sm text-blue-500 border rounded hover:bg-blue-50"
        >
          {isComplited ? "Completed" : "Not Completed"}
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="px-3 py-1 text-sm text-red-500 border cursor-pointer rounded hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
