import React, { Children } from "react";
import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "gray",
    fontSize: "12px",
  },
  //   "&:hover label": {
  //     fontWeight: 700,
  //   },
  "& label.Mui-focused": {
    color: "gray",
  },

  "& .MuiInput-underline": {
    borderBottomColor: "red",
    opacity: 20,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
});

export const StyledInput = ({ label }) => {
  return (
    <StyledTextField id="standard-basic" label={label} variant="standard" />
  );
};

export const SelectItem = ({ children }) => {
  return <MenuItem>{children}</MenuItem>;
};
