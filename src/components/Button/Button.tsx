import React from "react";
import MUButton from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";
import styles from "./Button.module.scss";
import cn from "classnames";

export const testId = "buttonTestId";

export interface TButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string | React.ReactNode;
  buttonStyle?:
    | "primary"
    | "secondary"
    | "primary-wrappingtext"
    | "secondary-wrappingtext"
    | "secondary-tiny-wrappingtext"
    | "tertiary"
    | "controlText";
  disabled?: boolean;
  size?: "large" | "small";
}

const Button: React.FC<TButtonProps> = (props) => {
  const { type, text, buttonStyle, disabled, ...rest } = props;
  const primary =
    buttonStyle === "primary" || buttonStyle === "primary-wrappingtext";
  const variant = primary ? "contained" : "outlined";

  const fullWidth = buttonStyle === "primary" || buttonStyle === "secondary";

  const outlinedPrimary = cn(styles.outlinedPrimary, {
    [styles.controlText]: buttonStyle === "controlText",
  });

  return (
    <StylesProvider injectFirst>
      <MUButton
        {...rest}
        color="primary"
        data-testid={testId}
        variant={variant}
        fullWidth={!!fullWidth}
        type={type}
        disabled={!!disabled}
        disableRipple={true}
        size={props.size}
        classes={{
          root: styles.bgeButton,
          containedPrimary: styles.containedPrimary,
          outlinedPrimary: outlinedPrimary,
          containedSecondary: styles.containedSecondary,
          outlinedSecondary: styles.outlinedSecondary,
          outlinedSizeSmall: styles.secondaryTiny,
          outlinedSizeLarge: styles.tertiary,
          disabled: styles.disabled,
          label: styles.bgelabel,
        }}
      >
        {text}
      </MUButton>
    </StylesProvider>
  );
};

export default Button;
