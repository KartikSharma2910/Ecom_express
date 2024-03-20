import { Box, Button, InputBase, InputLabel } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles";

const Verification = () => {
  const [otp, setOtp] = useState("");

  return (
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.heading}>Verify your Account</Box>
        <Box sx={styles.description}>We have sent an OTP to your email</Box>
      </Box>
      <Box sx={styles.wrapper}>
        <Box>
          <InputLabel sx={styles.label}>OTP</InputLabel>
          <InputBase
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            sx={styles.input}
          />
        </Box>
      </Box>
      <Box>
        <Button sx={styles.button}>Verify</Button>
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

export default Verification;
