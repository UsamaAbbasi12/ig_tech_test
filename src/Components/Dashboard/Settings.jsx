import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Settings() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-[40px]">Account Settings</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="w-full border p-16 flex flex-col justify-center items-center rounded-xl shadow-xl">
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-12 bg-slate-200 px-12 py-2 rounded-lg text-lg font-bold"
              >
                {isSubmitting ? "Updating..." : "Update"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Settings;
