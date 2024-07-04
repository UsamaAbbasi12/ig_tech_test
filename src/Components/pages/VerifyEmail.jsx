import React, { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const [emailVerified, setEmailVirified] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/auth/api/email_verify/${token}`)
      .then((res) => {
        console.log(res);
        if (res.data.result) {
          toast.success("Email Verified Successfully");
          setEmailVirified(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Can not Verify Email");
        }
      });
  }, []);
  const newuseremail = localStorage.getItem("newuseremail");
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen  ">
        <div className="">
          {emailVerified ? (
            <>
              <h1>
                Email{" "}
                <span className="font-bolder text-blue-500 underline">
                  {newuseremail}
                </span>{" "}
                Verified Please Login to Continue
              </h1>
            </>
          ) : (
            <div>
              <h1 className="text-center mb-5 text-[30px] ">
                Email{" "}
                <span className="font-bold text-blue-500 underline">
                  {newuseremail}
                </span>{" "}
                Verification in Progress...{" "}
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
