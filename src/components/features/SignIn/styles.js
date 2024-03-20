const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "75%",
    margin: "0 auto",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  heading: {
    fontSize: "34px",
    color: "#525252",
    fontWeight: 600,
  },

  description: {
    fontSize: "15px",
    color: "#525252",
  },

  label: {
    fontSize: "14px",
    marginBottom: "8px",
  },

  input: {
    border: "1px solid #DED2D9",
    borderRadius: "8px",
    padding: "10px 15px",
    "&.Mui-focused": {
      border: "1px solid #7F265B",
    },
  },

  navigator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "-1.2em",

    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      color: "#525252",
    },
  },

  checkbox: {
    "&.Mui-checked": {
      color: "#7F265B",
    },
  },

  button: {
    width: "100%",
    color: "white",
    backgroundColor: "#7F265B",
    height: "50px",
    "&:hover": {
      backgroundColor: "#7F265B",
    },
  },

  linker: {
    fontSize: "14px",
    color: "#7F265B",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    color: "#525252",
    fontSize: "14px",
  },
};

export default styles;
