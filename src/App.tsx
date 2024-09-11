import React, { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, Box } from '@mui/material';
import TaskForm from './components/taskForm';
import TaskList from './components/tasksList';
import Report from './components/report';

const App: React.FC = () => {
  const [taskUpdated, setTaskUpdated] = useState(false);

  const handleTaskCreated = () => {
    setTaskUpdated(!taskUpdated);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Management System</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Create New Task
        </Typography>
        <TaskForm onTaskCreated={handleTaskCreated} />
        <Box mt={4}>
          <TaskList key={taskUpdated ? 'updated' : 'not-updated'} />
        </Box>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Generate Reports
          </Typography>
          <Report />
        </Box>
      </Container>
    </div>
  );
};

export default App;