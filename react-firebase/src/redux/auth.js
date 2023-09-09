import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "services/auth";
import { displayError, setLocalStorageData } from "utils/helpers";

const initialState = {
  loading: false,
  userInfo: {},
  error: null,
  success: false
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    clearData: () => initialState
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
      setLocalStorageData("user", payload);
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = displayError(payload);
      state.success = false;
    }
  }
});

export const { setUser, clearData } = authSlice.actions;

export default authSlice.reducer;

// TODO: Here is the reference url for implementing authentication: https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
