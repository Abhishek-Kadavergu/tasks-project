import express from "express";
import connectDb from "./config/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/tasksRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the main updates");
});
app.get("/list", (req, res) => {
  res.send("hello from the list");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

const startServer = async () => {
  await connectDb();
  app.listen(3000, () => {
    console.log("Server is running in port 3000");
  });
};
startServer();
