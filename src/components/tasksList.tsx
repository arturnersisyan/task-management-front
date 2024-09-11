import React, { useEffect, useState, FC } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
} from "@mui/material";
import { getTasks, updateTaskStatus } from "../services/taskService";
import { ITaskData } from "../interfaces/fetchData";

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<ITaskData[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleStatusChange = async (
    taskId: string,
    status: "Pending" | "Completed"
  ) => {
    try {
      await updateTaskStatus(taskId, status);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemText primary={task.assignedMember} />
          <ListItemText primary={task.title} secondary={task.description} />
          <Select
            value={task.status}
            onChange={(e) =>
              handleStatusChange(
                task.id,
                e.target.value as "Pending" | "Completed"
              )
            }
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
