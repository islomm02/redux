import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  key: string;
  name: string;
  email: string;
}

interface UserState {
  selectedUsers: User[];
}

const initialState: UserState = {
  selectedUsers: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action: PayloadAction<User[]>) => {
      state.selectedUsers = action.payload;
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.selectedUsers = state.selectedUsers.filter(
        (user) => user.key !== action.payload
      );
    },
  },
});

export const { saveUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
