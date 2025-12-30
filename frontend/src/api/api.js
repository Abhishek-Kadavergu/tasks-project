import api from "./axios";

// AUTH
export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

// TASKS
export const getTasks = () => api.get("/tasks");

export const createTask = (task) => api.post("/tasks", task);

export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);
