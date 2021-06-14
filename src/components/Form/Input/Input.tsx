import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { StylesProvider } from "@material-ui/core/styles";
import { ErrorIcon } from "../../Icons";
import { useField } from "formik";
import styles from "./Input.module.scss";

export interface IInputProps {
  id?: string;
  label?: string;
  name: string;
  type: "text" | "email" | "password";
  helperText?: string;
  disabled?: boolean;

  width?: number | "fullWidth" | "auto";
}
const Input: React.FC<IInputProps> = (props: IInputProps) => {
  // const [field, meta, helpers] = useField<string>(props);

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  // check validation
  const errorMessage = !isValid && isTouched && "Field can not be blank";
  let icon = null;
  if (errorMessage) icon = <ErrorIcon />;

  let fullWidth = true;
  let style: React.CSSProperties = {};

  if (props.width && props.width === "auto") {
    fullWidth = false;
  } else if (props.width && Number.isFinite(props.width)) {
    fullWidth = false;
    style = { width: props.width };
  }

  return (
    <StylesProvider injectFirst>
      <TextField
        // {...field}
        {...props}
        onBlur={() => setIsTouched(true)}
        onChange={(e) => setIsValid(e.target.value !== "")}
        variant="filled"
        margin="dense"
        fullWidth={!!fullWidth}
        error={!!errorMessage}
        helperText={errorMessage ? errorMessage : props.helperText}
        style={style}
        InputProps={{
          classes: {
            root: styles.bgeTextfield,
            disabled: styles.bgeTextfieldDisabled,
            focused: styles.bgeTextfieldFocused,
            input: "input",
            error: styles.bgeTextfieldError,
          },
          endAdornment: icon,
          disableUnderline: true,
        }}
        InputLabelProps={{
          classes: {
            root: styles.bgeTextfieldLabel,
            disabled: styles.bgeTextfieldLabelDisabled,
            focused: styles.bgeTextfieldLabelFocused,
            error: styles.bgeTextfieldLabelError,
          },
        }}
        FormHelperTextProps={{
          classes: {
            root: styles.bgeTextfieldHelper,
            error: styles.bgeTextfieldHelperError,
          },
        }}
      />
    </StylesProvider>
  );
};

export default Input;
