import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Field, getIn } from "formik";
import {
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
  CircularProgress,
} from "@material-ui/core";
import clsx from "clsx";
import styles from "./styles";

// This is meant to be a common component for several input types. It shouldn't be used on its own.
const InputWithValidationBase = (props) => {
  const {
    field,
    label,
    required,
    helperText,
    placeholder,
    isLoading,
    disabled,
    customErrorLabel,
    customErrorText,
    isEmail,
    ...rest
  } = props;
  const classes = styles();

  const validate = async (value) => {
    let error = "";
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (required && (!value || value.length === 0)) {
      error = customErrorText || `${customErrorLabel || label} is required`;
      return error;
    }
    if (isEmail && (!value || !emailReg.test(value))) {
      error =
        customErrorText || `${customErrorLabel || label} must be a valid email`;
      return error;
    }

    return error;
  };

  return (
    <Field name={field} validate={validate}>
      {({
        field: { value, onBlur, name, onChange },
        form: { touched, errors, setFieldValue, isSubmitting },
      }) => {
        return (
          <div className={classes.textWrapper}>
            <TextField
              variant="outlined"
              id={name}
              onChange={onChange}
              {...{
                required,
                name,
                placeholder,
                value,
              }}
              error={errors[field] && touched[field]}
              helperText={
                (errors[field] && touched[field] && errors[field]) || helperText
              }
              onBlur={onBlur(name)}
              label={
                <span>
                  {label}
                  {!required && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      {" "}
                      (optional)
                    </Typography>
                  )}
                </span>
              }
              InputLabelProps={{ required: false }}
              fullWidth
              disabled={isLoading || isSubmitting || disabled}
              {...rest}
            >
              {props.children}
            </TextField>
          </div>
        );
      }}
    </Field>
  );
};

InputWithValidationBase.defaultProps = {
  helperText: undefined,
  placeholder: undefined,
  required: false,
  customValidation: undefined,
  maxLength: 100,
  icon: undefined,
  inputMode: undefined,
  isLoading: false,
  autoComplete: false,
  fsMasked: false,
  hiddenLabel: false,
};

const InputWithValidationBaseProps = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  fsMasked: PropTypes.bool,
  autoComplete: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["start", "end"]).isRequired,
    color: PropTypes.string,
  }),
  inputMode: PropTypes.string,
  isLoading: PropTypes.bool,

  // This should take a Yup validation or an array of Yup validations
  customValidation: PropTypes.oneOfType([
    PropTypes.shape({
      schema: PropTypes.any.isRequired,
      message: PropTypes.string.isRequired,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        schema: PropTypes.any.isRequired,
        message: PropTypes.string.isRequired,
      })
    ),
  ]),
};

InputWithValidationBase.propTypes = InputWithValidationBaseProps;

export default InputWithValidationBase;
export { InputWithValidationBaseProps };
