import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: null,
  user: null,
  error: null,
  message: null,
  loading: null,
  redirect: null,
  membership: null,
  membershipLoading: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirm,
      country,
      birth_date,
    } = data;
    try {
      const response = await axios.post("register", {
        first_name,
        last_name,
        email,
        password,
        password_confirm,
        country,
        birth_date,
      });
      return response.data;
    } catch (error) {
      let errorsData = error.response.data;
      let errors = [];
      // join all keys and values into one string
      for (let key in errorsData) {
        errors.push(`${key}: ${errorsData[key]}`);
      }
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const response = await axios.get("user");
    const { dispatch } = thunkAPI;
    dispatch(getMembership());
    return response.data;
  } catch (error) {
    const { dispatch } = thunkAPI;
    dispatch(refreshToken());
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  const { email, password } = data;
  try {
    const response = await axios.post("login", { email, password });
    const { dispatch } = thunkAPI;
    dispatch(getUser());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("logout", { withCredentials: true });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("verify-token", {
        withCredentials: true,
      });
      const { dispatch } = thunkAPI;
      dispatch(getUser());
      console.clear();
      return response.data;
    } catch (error) {
      console.clear();
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("refresh", { withCredentials: true });
      const { dispatch } = thunkAPI;
      dispatch(checkAuth());
      return response.data;
    } catch (error) {
      console.clear();
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRedirect: (state) => {
      state.redirect = false;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetMessage: (state) => {
      state.message = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  
  },
);

export const { resetRedirect, resetError, resetMessage, setError, setMessage, setUser } =
  authSlice.actions;

export default authSlice.reducer;