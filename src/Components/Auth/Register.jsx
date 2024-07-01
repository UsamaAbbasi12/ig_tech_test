import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
export const Register = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  };

  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    // Simulate logging in
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div className="h-[100vh] flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[60px] mb-4">Create New Account</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-[900px] border p-16 flex flex-col justify-center items-center rounded-xl shadow-xl">
              <div className="mb-3">
                <label htmlFor="username" className="mr-10 block mb-2 text-xl">
                  Username
                </label>
                <Field
                  className="w-[500px] p-2 rounded-lg outline-none shadow-none border-none "
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
                <label htmlFor="password" className="mr-10 block mb-2 text-xl">
                  Password
                </label>
                <Field
                  className="w-[500px] p-2 rounded-lg outline-none shadow-none border-none "
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

              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="mr-10 block mb-2 text-xl"
                >
                  Confirm Password
                </label>
                <Field
                  className="w-[500px] p-2 rounded-lg outline-none shadow-none border-none "
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-12 bg-slate-200 px-12 py-2 rounded-lg text-lg font-bold"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>

              <div className="mt-2 text-xl">
                Already have an Account{" "}
                <Link className="underline" to="/">
                  SignIn
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
