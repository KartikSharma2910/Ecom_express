import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const AuthLayout = ({ children }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box
          component="img"
          src="/authLogo.jpeg"
          alt="authlogo"
          sx={styles.image}
        />
      </Box>
      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
};

export default AuthLayout;
