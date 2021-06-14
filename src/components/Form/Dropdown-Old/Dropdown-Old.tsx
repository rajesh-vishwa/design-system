import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  StylesProvider,
} from "@material-ui/core";
import styles from "./Dropdown-Old.module.scss";
// import { ErrorIcon } from "src";

export const testId = "dropdownTestId";

export interface IDropdownProps {
  id?: string;
  selectedValue?: unknown;
  label: string;
  helperText?: string;
  disabled?: boolean;
  isRequired?: boolean;
  items: { value: string | number; text: string }[];
  onChnage?: (value: unknown) => {};
}

const DropdownOld: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  const {
    id,
    selectedValue,
    label,
    helperText,
    disabled,
    items,
    onChnage,
    isRequired = false,
  } = props;

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();
    setIsValid(!!event.target.value);
    onChnage && onChnage(event.target.value as string);
  };

  // check validation
  const errorMessage = isRequired && !isValid && isTouched && "error";

  return (
    <StylesProvider injectFirst>
      <FormControl
        variant="filled"
        className={styles.formControl}
        disabled={disabled}
        data-testid={testId}
        onBlur={() => setIsTouched(true)}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={selectedValue}
          onChange={handleChange}
          className={styles.selectEmpty}
          variant="outlined"
          error={!!errorMessage}
        >
          {items.map((item) => (
            <MenuItem value={item.value}>{item.text}</MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {errorMessage ? errorMessage : helperText}
        </FormHelperText>
      </FormControl>
    </StylesProvider>
  );
};

export default DropdownOld;
