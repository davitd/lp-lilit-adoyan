import { MenuItem, Stack, Box, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import CustomTextField from "./textfield";

import "./styles.css";

function MuiTextField({ text, value, handleChange, options, placeholder }) {
 
  return (
    
      <div className="row-wrapper">
        
          <span className="label">
            {text}
          </span>
        <CustomTextField
          placeholder={placeholder}
          handleChange={handleChange}
          value={value}
          //   onChange={handleChange}
          select
          className="m-item"
          inputProps={{
            sx: {
              padding: "11.5px 14px",
              maxWidth: "380px",
              width: "100%",
              height: "46px",
              border: "2px solid #F6A95F",
              borderRadius: "12px",

              "&:hover fieldset": {
                border: "none",
              },
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "none",
              },
            },
          }}
          children={options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        ></CustomTextField>
      </div>
      );
}

export default MuiTextField;
