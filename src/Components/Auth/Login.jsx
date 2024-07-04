import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { login } from "../../slices/auth/auth-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        if (res.user) {
          navigate("/dashboard");
        }

        setSubmitting(false);
      })
      .catch((err) => {
        setSubmitting(false);
      });
  };
  return (
    <div className="h-[100vh] flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center mb-2">
        <h1 className="text-[60px]">Login into your account</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-[900px] border p-16 flex flex-col justify-center items-center rounded-xl shadow-xl">
              <div className="mb-4">
                <label htmlFor="email" className="mr-10 block mb-2 text-xl">
                  Email
                </label>
                <Field
                  className="w-[500px] p-2 rounded-lg outline-none shadow-none border-none "
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mr-10 block mb-2 mt-2 text-xl"
                >
                  Password
                </label>
                <Field
                  className="w-[500px] p-2 rounded-lg outline-none shadow-none border-none"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-12 bg-slate-200 px-12 py-2 rounded-lg font-bold"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <div className="mt-2 text-xl">
                Don't have an Account{" "}
                <Link className="underline" to="/register">
                  Register
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
