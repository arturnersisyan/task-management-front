import axios from 'axios';
import { ITaskData, ReportData, statusType } from '../interfaces/fetchData';

const API_URL = 'http://localhost:5000'; 
export const getTasks = async (): Promise<ITaskData[]> => {
  const response = await axios.get<ITaskData[]>(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (taskData: Omit<ITaskData, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<ITaskData> => {
  const response = await axios.post<ITaskData>(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const updateTaskStatus = async (taskId: string, status: statusType): Promise<ITaskData> => {
  const response = await axios.patch<ITaskData>(`${API_URL}/tasks/status/${taskId}`, { status });
  return response.data;
};

export const getTaskById = async (taskId: number): Promise<ITaskData> => {
  const response = await axios.get<ITaskData>(`${API_URL}/tasks/${taskId}`);
  return response.data;
};

export const getReportByMember = async (memberName: string): Promise<ReportData> => {
  const response = await axios.get<ReportData>(`${API_URL}/tasks/report/member/${memberName}`);
  return response.data;
};