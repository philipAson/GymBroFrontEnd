import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

const login = () => {
  return (
    <Box
      component="form"
      sx={{padding: '20px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.5)'}}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color: "grey"}}>Gymbro</h1>
      <TextField required label="Username" />
      <TextField required label="Password" type="password" />
    </Box>
  );
};

export default login;
