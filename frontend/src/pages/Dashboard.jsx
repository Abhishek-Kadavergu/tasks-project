import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const navigate = useNavigate();

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data.tasks);
    } catch {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addOrUpdateTask = async () => {
    if (!title || !description) return;

    if (editingTaskId) {
      await updateTask(editingTaskId, { title, description });
      setEditingTaskId(null);
    } else {
      await createTask({ title, description });
    }

    setTitle("");
    setDescription("");
    loadTasks();
  };

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <div>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addOrUpdateTask}>
          {editingTaskId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            <strong>{t.title}</strong>
            <br />
            {t.description}
            <br />

            <button onClick={() => startEdit(t)}>Edit ✏️</button>
            <button onClick={() => removeTask(t._id)}>Delete ❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
