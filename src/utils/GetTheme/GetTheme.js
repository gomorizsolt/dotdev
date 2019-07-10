const darkTheme = {
  background: "#3F3F3F !important",
  color: "#DBDBDB !important",
};

const lightTheme = {
  background: "#E5E6E8 !important",
  color: "#325359 !important",
};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
