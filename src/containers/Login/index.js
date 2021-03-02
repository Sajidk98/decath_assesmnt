import React from "react";
import { Button, Grid } from "@material-ui/core";
import InputWithValidation from "../../components/InputWithValidation";
import styles from "./style";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const classes = styles();
  const history = useHistory();
  const users = useSelector(({ users }) => users);
  return (
    <Formik
      initialValues={{
        user_name: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        const loginUser = users.data.find(
          (item) => item.email === values.user_name
        );
        if (loginUser) {
          if (values.password === loginUser.password) {
            localStorage.setItem("isAuthenticated", loginUser.name);
            history.push("/");
          } else {
            console.log("wrong pass");
          }
        } else {
          console.log("user does not exist");
        }
      }}
    >
      {(formikProps) => {
        const {
          values,
          dirty,
          isSubmitting,
          handleSubmit,
          setFieldValue,
          validateForm,
          setSubmitting,
        } = formikProps;

        const handleSubmitClick = async () => {
          validateForm().then((validation) => {
            handleSubmit(values);
            if (Object.keys(validation).length === 0) {
              setSubmitting(false);
            }
          });
        };

        return (
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item xs={5}>
              <form onSubmit={handleSubmit} autocomplete="off">
                <InputWithValidation
                  field="user_name"
                  label="User Name"
                  placeholder="Enter your user name"
                  required
                  style={{ marginTop: 16 }}
                  value={values.user_name}
                  isEmail
                />

                <InputWithValidation
                  field="password"
                  label="Password"
                  placeholder="Enter your password"
                  required
                  style={{ marginTop: 16 }}
                  type="password"
                  value={values.password}
                />

                <div className={classes.ButtonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};
export default Login;
