import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/message-slice";
import authService from "../../services/auth-service";
import { BroadcastChannel } from "broadcast-channel";
import { toast } from "react-toastify";

const logoutChannel = new BroadcastChannel("logout");

export const logoutAllTabs = () => {
  logoutChannel.onmessage = () => {
    logoutChannel.close();
    authService.logout();
  };
};

const user =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    console.log(username);
    try {
      console.log(username, email, password);
      const response = await authService.register(username, email, password);
      console.log(response);
      // if (response.data.message) {
      //   toast.success((response.data.message).charAt(0).toUpperCase() + data.message.slice(1).toLowerCase());
      // }
      // // console.log(data);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      console.log(error.response.data);

      console.log("ERR: ", error.response);
      console.log("name: ", username);
      console.log("email: ", email);
      console.log("password: ", password);
      const message = error?.response?.data?.message;

      toast.error(error?.response?.data);
      if (message) {
        if (message?.length) {
          message.forEach((mes) => {
            toast.error(mes.toString());
          });
        } else {
          toast.error(message.toString());
        }
      }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);

      if (data?.error || data?.status === 400) {
        toast.error(
          data.message.charAt(0).toUpperCase() +
            data.message.slice(1).toLowerCase()
        );
      } else if (data?.message && data?.status === 200) {
        toast.success(
          data.message.charAt(0).toUpperCase() +
            data.message.slice(1).toLowerCase()
        );
      }

      const message = data?.message ? data?.message : "";

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.fulfillWithValue({ user: data.result });
    } catch (error) {
      console.log("ERR: ", error.response);
      const message = error?.response?.data?.message;

      if (message) {
        if (message?.length) {
          message.forEach((mes) => {
            toast.error(mes.toString());
          });
        } else {
          toast.error(message.toString());
        }
      }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  logoutChannel.postMessage("Logout");
  logoutAllTabs();
  authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

const { reducer } = authSlice;
export default reducer;
