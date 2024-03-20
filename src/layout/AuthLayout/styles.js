const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },

  imageWrapper: {
    width: "60%",
    overflow: "hidden",
    display: {
      xs: "none",
      md: "block",
    },
  },

  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: {
      xs: "100%",
      md: "40%",
    },
  },
};

export default styles;
