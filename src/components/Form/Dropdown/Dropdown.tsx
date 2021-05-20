import React from "react";
import Select from "@material-ui/core/Select";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  StylesProvider,
} from "@material-ui/core";
import styles from "./Dropdown.module.scss";
// import { ErrorIcon } from "src";

export const testId = "dropdownTestId";

export interface IDropdownProps {
  id?: string;
  selectedValue?: unknown;
  label: string;
  helperText?: string;
  disabled?: boolean;
  items: { value: string | number; text: string }[];
  onChnage?: (value: unknown) => {};
}

const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  const {
    id,
    selectedValue,
    label,
    helperText,
    disabled,
    items,
    onChnage,
  } = props;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();
    onChnage && onChnage(event.target.value as string);
  };

  // check validation
  const errorMessage = ""; //meta.error && meta.touched ? meta.error : "";
  let icon = null;
  // if (errorMessage) icon = <ErrorIcon />;

  return (
    <StylesProvider injectFirst>
      <FormControl
        variant="filled"
        className={styles.formControl}
        disabled={disabled}
        data-testid={testId}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={selectedValue}
          onChange={handleChange}
          className={styles.selectEmpty}
          variant="outlined"
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

export default Dropdown;
