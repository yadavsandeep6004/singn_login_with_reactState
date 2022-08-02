import "./style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { successful } from "../../services/toastify";
import { registerUser } from "../../apis";
import { setData } from "../../services/storge";

const Singnup = (props) => (
  <div className="form_containar">
    <h2>Sing-up</h2>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validate={(values) => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = "Required";
        } else if (values.firstName.length <= 3) {
          errors.firstName = "minimum length 3";
        } else if (values.firstName.length >= 10) {
          errors.firstName = "maximum length 10";
        }

        if (!values.lastName) {
          errors.lastName = "Required";
        } else if (values.lastName.length <= 3) {
          errors.lastName = "minimum length 3";
        } else if (values.lastName.length >= 10) {
          errors.lastName = "maximum length 10";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length <= 5) {
          errors.password = "minimum length 5";
        } else if (values.password.length >= 15) {
          errors.password = "maximun length 15";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "password does not match";
        }

        return errors;
      }}
      onSubmit={async(values, { setSubmitting }) => {
        let res = await registerUser(values);
        if (!res.status.error) {
          setData("User", res.data);
          setData("login", true);
          successful(res.status.message);
          props.onLogin()
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>
              First Name <br />
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="p" />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <br />
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="p" />
            </label>
          </div>
          <div>
            <label>
              Email <br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" />
            </label>
          </div>
          <div>
            <label>
              Password <br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" />
            </label>
          </div>
          <div>
            <label>
              Confirm-Password <br />
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="p" />
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Singnup;
