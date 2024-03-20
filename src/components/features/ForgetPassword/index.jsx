import { Box, Button, InputBase, InputLabel } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.heading}>Forgot your password?</Box>
        <Box sx={styles.description}>
          We will help you to set a new password
        </Box>
      </Box>
      <Box sx={styles.wrapper}>
        <Box>
          <InputLabel sx={styles.label}>Email</InputLabel>
          <InputBase
            fullWidth
            placeholder="mail@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={styles.input}
          />
        </Box>
      </Box>
      <Box>
        <Button sx={styles.button}>Next</Button>
      </Box>
      <Box sx={styles.footer}>
        Don't have an account?{" "}
        <Box component="span" sx={styles.linker}>
          Sign Up
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
