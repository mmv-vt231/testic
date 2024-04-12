import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "@config/constants";

export const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    await axios.post(`${API_URL}/auth/register`, data);
  } catch (error) {
    if (error?.response?.data) {
      return rejectWithValue({ data: error?.response?.data });
    } else {
      return rejectWithValue({ status: error.code });
    }
  }
});

export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);

    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      return rejectWithValue({ data: error?.response?.data });
    } else {
      return rejectWithValue({ status: error.code });
    }
  }
});
