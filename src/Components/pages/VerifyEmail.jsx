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
      .get(`http://localhost:8000/user_portal/api/email-verify/${token}`)
      .then((res) => {
        if (res.data.status === 200) {
          setEmailVirified(true);
        } else {
          toast.error("Can not Verify Email");
        }
      });
  }, []);
  const newuseremail = localStorage.getItem("newuseremail");
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen border ">
        <div className="">
          {emailVerified ? (
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex flex-column justify-content-center items-center">
                <div className="pt-5 text-center text-gray-600 d-flex align-items-center gap-2 fs-4">
                  <h1>
                    Email{" "}
                    <span className="fw-bolder text-primary text-decoration-underline">
                      {newuseremail}
                    </span>{" "}
                    Verified Please Login to Continue
                  </h1>
                </div>
                <div className="form-group m-auto mt-5">
                  <button
                    onClick={() => navigate("/")}
                    style={{ width: "200px" }}
                    className="axil-btn btn-fill-primary btn-fluid btn-primary"
                    name="submit-btn"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-center mb-5">
                Email{" "}
                <span className="fw-bolder text-primary text-decoration-underline">
                  {newuseremail}
                </span>{" "}
                Verification in Progress...{" "}
              </h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default VerifyEmail;
