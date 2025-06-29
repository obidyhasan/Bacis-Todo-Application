import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filters: "All" | "High" | "Medium";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "adfaoldsfasl",
      title: "Initialize Frontend",
      description: "Create Home Page, and routing",
      dueDate: "2025-11-02",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "adfaodfadfeldsfasl",
      title: "Initialize Backend",
      description: "This is Backend Description",
      dueDate: "2025-11-02",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filters: "All",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilters = (state: RootState) => {
  return state.todo.filters;
};

export default taskSlice.reducer;
