import React from "react";
import { logout } from "../../slices/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="text-2xl"
        onClick={() => {
          dispatch(logout());
          toast.success("Logged Out Successfully");
        }}
      >
        Logout
      </button>
    </div>
  );
};
