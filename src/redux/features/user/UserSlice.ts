import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      name: "Obidy Hasan",
      id: "o3r7sSdgjdMtZUprWgAoR",
    },
    {
      name: "Umme Habiba",
      id: "Ta0ic31omrcWr5MXS4NmA",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const userData = {
        ...action.payload,
        id: nanoid(),
      };
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
