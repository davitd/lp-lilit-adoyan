import { TextField,  } from "@mui/material";


function CustomTextField({  value,  children, handleChange, placeholder }) {


  return (
    
    
        <TextField
        
        label={placeholder}
    
         sx={ {
            maxWidth: "380px",
            width:'100%',
            height: "46px",
            border: "none",
            borderRadius: "12px",
            '&:hover fieldset': {
              border:'none',

            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border:'none'
            },
                 }}
          value={value}
          onChange={handleChange}
          select
          className="m-item"
          inputProps={{
            
            sx: {
        
                padding:'11.5px 14px',  
                maxWidth: "380px",
                width:'100%',
                height: "46px",
                border: "2px solid #F6A95F",
                borderRadius: "12px",
              
              '&:hover fieldset': {
                border:'none'
              },
              '&:focus-within fieldset, &:focus-visible fieldset': {
                border:'none'
              },
            },
          }}
          
        >
         {children}
        </TextField>
 
  );
}

export default CustomTextField;
