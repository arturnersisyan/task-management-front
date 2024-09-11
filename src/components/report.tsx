import React, { useState, FC } from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import { getReportByMember } from '../services/taskService';
import { ReportData } from '../interfaces/fetchData';

const Report: FC = () => {
  const [memberName, setMemberName] = useState<string>('');
  const [reportData, setReportData] = useState<ReportData | null>(null);

  const handleMemberReport = async () => {
    try {
      const data = await getReportByMember(memberName);
      setReportData(data);
    } catch (error) {
      console.error('Error generating report by member:', error);
    }
  };

  return (
    <div>
      <TextField
        label="User Name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleMemberReport} variant="contained" color="primary">
        Generate Report
      </Button>
      {reportData && (
        <List>
          <ListItem>
            <ListItemText primary="Completed Tasks" secondary={reportData.completedTasks} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Average Completion Time (min)" secondary={reportData.avgTimeToCompleteTasksInMin} />
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default Report;