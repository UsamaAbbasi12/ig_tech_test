import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Login } from "./Components/Auth/Login";
import { Register } from "./Components/Auth/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="dashboard" element={<MainLayout />}></Route>
      </Routes>{" "}
    </>
  );
}

export default App;
