// Soft UI Dashboard React base styles
import typography from "../../base/typography";
import colors from "../../base/colors";

// Soft UI Dashboard React helper functions

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
