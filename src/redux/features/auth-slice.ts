import { AuthState } from "@/entities/AuthState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
}

const initialState = {
  value: {
    isAuth: false,
    username: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          isModerator: false,
        },
      };
    },
  },
  toggleModerator: (state: any) => {
    state.value.isModerator = !state.value.isModerator,
  }
});

export const { logIn, logOut, toggleModerator } = auth.actions;
export const authReducer = auth.reducer;
