import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  StylesProvider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./Dropdown.module.scss";
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
  onChange?: (value: unknown) => void;
  ariaLabel?: string;
}

const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  const {
    id,
    selectedValue,
    label,
    helperText,
    disabled,
    items,
    onChange,
    isRequired = false,
    ariaLabel,
  } = props;

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setIsValid(!!event.target.value);
    onChange && onChange(event.target.value as string);
  };

  // check validation
  const errorMessage = isRequired && !isValid && isTouched && "error";

  return (
    <StylesProvider injectFirst>
      <FormControl
        variant="outlined"
        className={styles.formControl}
        disabled={disabled}
        data-testid={testId}
        onBlur={() => setIsTouched(true)}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={`select-${id}`}
          value={selectedValue}
          onChange={handleChange}
          // label={label}
          classes={{
            root: styles.OutlinedInput,
            select: styles.select,
            selectMenu: styles.selectMenu,
          }}
          //variant="outlined"
          error={!!errorMessage}
          IconComponent={ExpandMoreIcon}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
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
