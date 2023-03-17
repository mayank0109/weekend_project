import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => {
  const borderColor =
    theme.palette.type === "dark"
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(0, 0, 0, 0.23)";
  const borderColorHover =
    theme.palette.type === "dark"
      ? "rgba(255, 255, 255, 1.0)"
      : "rgba(0, 0, 0, 0.5)";

  return {
    root: {
      borderColor,
      "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        borderColor: borderColorHover,
      },
    },
    disabled: {},
    focused: {},
    error: {},
    notchedOutline: {
      borderColor,
    },
  };
});

const TextField = (props) => {
  const classes = useStyles();
  const { isLoading, InputProps, ...textFieldProps } = props;

  if (textFieldProps.variant !== "outlined") {
    delete classes.notchedOutline;
  }

  return <MuiTextField {...textFieldProps} InputProps={{ classes, ...InputProps }} />
};
export default TextField;