import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      // TODO: Fetch some more data using user id here and send in the bellow object to access via redux
      return { id: userCredentials.user.uid, email };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
