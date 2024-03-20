import { Box, Button, InputBase, InputLabel } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.heading}>Create a new Account</Box>
        <Box sx={styles.description}>
          See what is going on with your business
        </Box>
      </Box>
      <Box sx={styles.wrapper}>
        <Box>
          <InputLabel sx={styles.label}>Username</InputLabel>
          <InputBase
            fullWidth
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={styles.input}
          />
        </Box>
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
        <Box>
          <InputLabel sx={styles.label}>Confirm Password</InputLabel>
          <InputBase
            fullWidth
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={styles.input}
          />
        </Box>
      </Box>
      <Box>
        <Button sx={styles.button}>Sign Up</Button>
      </Box>
      <Box sx={styles.footer}>
        Already a user?{" "}
        <Box component="span" sx={styles.linker}>
          Sign In
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
