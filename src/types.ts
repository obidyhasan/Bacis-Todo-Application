export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  user: string | null;
  priority: "High" | "Medium" | "Low";
}

export interface IUser {
  id: string;
  name: string;
}
