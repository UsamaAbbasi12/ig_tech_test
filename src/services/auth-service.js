import axios from "axios";
import { toast } from "react-toastify";

const register = (username, email, password) => {
  // Check if referral_code is null or undefined

  return axios
    .post("http://localhost:8000/" + "auth/api/signup", {
      username,
      email,
      password,
    })
    .then((response) => {
      if (response.data?.result) {
        toast.success(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.result));
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("http://localhost:8000/" + "auth/api/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data?.result) {
        localStorage.setItem("user", JSON.stringify(response.data.result));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user_loggedIn");
  window.location.href = window.location.origin + "/";
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
