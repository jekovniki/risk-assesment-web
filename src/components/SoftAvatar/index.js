import { forwardRef } from "react";

import PropTypes from "prop-types";

import SoftAvatarRoot from "./SoftAvatarRoot";

const SoftAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <SoftAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of SoftAvatar
SoftAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the SoftAvatar
SoftAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default SoftAvatar;
