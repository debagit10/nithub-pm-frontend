import React from "react";
import { Alert } from "@mui/material";

const Toast = (props: any) => {
  return (
    <Alert {...props} elevation={6}>
      {props.message}
    </Alert>
  );
};

export default Toast;
