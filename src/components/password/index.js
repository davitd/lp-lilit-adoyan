import { useState } from "react";
import { TextField, InputAdornment,   IconButton,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './styles.css'

function Password({setPassword, mobile}){
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handlePassworsChange=(e)=>setPassword(e.target.value)

    return   <div className="field-wrapper">
 <span className='password-label-wrapper' >My password:</span>
    <TextField
    onChange={handlePassworsChange}
      sx={!mobile?{
        maxWidth: "380px",
        width: "100%",
        height: "46px",
        border: "none",
        borderRadius: "12px",
        "&:hover fieldset": {
          border: "none",
        },
        "&:focus-within fieldset, &:focus-visible fieldset": {
          border: "none",
        },
      }:
      {
        maxWidth: "216px",
        width: "100%",
        height: "46px",
        border: "none",
        borderRadius: "12px",
        "&:hover fieldset": {
          border: "none",
        },
        "&:focus-within fieldset, &:focus-visible fieldset": {
          border: "none",
        },
      }}
      type={showPassword ? "text" : "password"} // <-- This is where the magic happens
      InputProps={{
        // <-- This is where the toggle button is added.
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          maxWidth: "380px",
          width: "100%",
          height: "46px",
          border: "2px solid #F6A95F",
          borderRadius: "12px",

          "&:hover fieldset": {
            border: "none",
          },
          "&:focus-within fieldset, &:focus-visible fieldset":
            {
              border: "none",
            },
        },
      }}
    >
      My password:{" "}
    </TextField>
  </div>
}

export default Password;