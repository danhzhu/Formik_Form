import React from "react";
import { useFormik } from "formik";

function App() {
  // a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        if (!formik.errors.email && !formik.errors.password) {
          alert("Login Successful");
        } else {
          alert("Login Failed");
        }
        resetForm();
      }, 500);
    },
  });

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input
            type="email"
            id="emailField"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div id="emailError" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="pswField">Password:</label>
          <input
            type="password"
            id="pswField"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div id="pswError" style={{ color: "red" }}>
              {formik.errors.password}
            </div>
          )}
        </div>
        <div>
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
