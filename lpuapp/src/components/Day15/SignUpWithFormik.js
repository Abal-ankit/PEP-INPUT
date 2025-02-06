import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUpWithFormik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be atleast 3 chararacters")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("required"),
      password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.name && formik.errors.name ? (
                <div style={{color : "red"}}>{formik.errors.name}</div>
            ) : null
          }
        </div>
        <div>
          <label>Email : </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email && formik.errors.email ? (
                <div style={{color : "red"}}>{formik.errors.email}</div>
            ) : null
          }
        </div>
        <div>
          <label>Password : </label>
          <input
            id="password"
            name="password"
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.password && formik.errors.password ? (
                <div style={{color : "red"}}>{formik.errors.password}</div>
            ) : null
          }
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpWithFormik;
