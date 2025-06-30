import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/TaskSlice";
import userReducer from "./features/user/UserSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
