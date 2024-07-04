import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Login } from "./Components/Auth/Login";
import { Register } from "./Components/Auth/Register";
import Home from "./Components/Dashboard/Home";
import Settings from "./Components/Dashboard/Settings";
import Reports from "./Components/Dashboard/Reports";
import VerifyEmail from "./Components/pages/VerifyEmail";
import { useSelector } from "react-redux";
import { NotFound } from "./Components/pages/NotFound";
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/emailverify/:token" element={<VerifyEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {isLoggedIn && (
          <>
            <Route path="dashboard" element={<MainLayout />}>
              <Route element={<Home />} index />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </>
        )}
      </Routes>{" "}
    </>
  );
}

export default App;
