import React, { useState, FC } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { createTask } from "../services/taskService";
import { ITaskData } from "../interfaces/fetchData";

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm: FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [assignedMember, setAssignedMember] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      assignedMember,
    };

    try {
      await createTask(newTask);
      onTaskCreated();
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
      setAssignedMember("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="User"
        value={assignedMember}
        onChange={(e) => setAssignedMember(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="priority">Priority</InputLabel>
        <Select
          labelId="priorit"
          value={priority}
          label="Priority"
          onChange={(e) =>
            setPriority(e.target.value as "Low" | "Medium" | "High")
          }
          required
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Create Task
      </Button>
    </form>
  );
};

export default TaskForm;
