import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/UserSlice";

interface InitialState {
  tasks: ITask[];
  filters: "All" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "PWC1rhx-ET_Ansu9z20Yw",
      isCompleted: false,
      title: "Provident quisquam ",
      description: "Aute voluptas proide",
      priority: "Low",
      user: "Ta0ic31omrcWr5MXS4NmA",
      dueDate: "2025-07-03T18:00:00.000Z",
    },
    {
      id: "PWC1rhx-ET_Ansu9z20Yw",
      isCompleted: false,
      title: "Front End Development ",
      description: "Aute voluptas proide",
      priority: "Medium",
      user: null,
      dueDate: "2025-07-03T18:00:00.000Z",
    },
  ],
  filters: "All",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "user"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
    user: taskData.user ? taskData.user : null,
  };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const taskData = {
      //   ...action.payload,
      //   id: uuidv4(),
      //   isCompleted: false,
      // };
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"All" | "Low" | "Medium" | "High">
    ) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks.forEach((task) =>
        task.user === action.payload ? (task.user = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filters = state.todo.filters;
  if (filters === "Low") {
    return state.todo.tasks.filter((task) => task.priority === filters);
  } else if (filters === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === filters);
  } else if (filters === "High") {
    return state.todo.tasks.filter((task) => task.priority === filters);
  } else {
    return state.todo.tasks;
  }
};

export const selectFilters = (state: RootState) => {
  return state.todo.filters;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
