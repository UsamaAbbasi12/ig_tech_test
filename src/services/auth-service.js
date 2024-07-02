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
      console.log("Response:", response);
      if (response.data?.result?.token) {
        toast.success(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.result));
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(process.env.BACKEND_API_URL + "api/login_user", {
      email,
      password,
    })
    .then((response) => {
      if (response.data?.result) {
        localStorage.setItem("user", JSON.stringify(response.data.result));
        console.log("User logged in:", response.data.result); // Log the user information
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
