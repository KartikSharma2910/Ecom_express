import { Box, Button, InputBase, InputLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import styles from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.heading}>Login to your Account</Box>
        <Box sx={styles.description}>
          See what is going on with your business
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
        <Box>
          <InputLabel sx={styles.label}>Password</InputLabel>
          <InputBase
            fullWidth
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={styles.input}
          />
        </Box>
      </Box>
      <Box sx={styles.navigator}>
        <FormControlLabel
          control={<Checkbox defaultChecked sx={styles.checkbox} />}
          label="Remember me"
        />
        <Box sx={styles.linker}>Forgot Password?</Box>
      </Box>
      <Box>
        <Button sx={styles.button}>Login</Button>
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

export default SignIn;
