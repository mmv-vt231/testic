import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "@config/constants";

export const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    await axios.post(`${API_URL}/auth/register`, data);
  } catch (error) {
    if (error.response && error.response.data.title) {
      return rejectWithValue(error.response.data.title);
    } else {
      let errorMessage;

      switch (error.code) {
        case "ERR_NETWORK":
          errorMessage = "Невдалося з'єднатися з сервером";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return rejectWithValue(errorMessage);
    }
  }
});

export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);

    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.title) {
      return rejectWithValue(error.response.data.title);
    } else {
      let errorMessage;

      switch (error.code) {
        case "ERR_NETWORK":
          errorMessage = "Невдалося з'єднатися з сервером";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return rejectWithValue(errorMessage);
    }
  }
});

export const authorizeUser = createAsyncThunk(
  "auth/authorize",
  async (_, { getState, rejectWithValue }) => {
    try {
      await axios.get(`${API_URL}/auth/authorize`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error) {
      if (error.response && error.response.data.title) {
        return rejectWithValue(error.response.data.title);
      } else {
        let errorMessage;

        switch (error.code) {
          case "ERR_NETWORK":
            errorMessage = "Невдалося з'єднатися з сервером";
            break;
          default:
            errorMessage = error.message;
            break;
        }

        return rejectWithValue(errorMessage);
      }
    }
  }
);
