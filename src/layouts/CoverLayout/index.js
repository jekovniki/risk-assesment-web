import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import SoftBox from "../../components/SoftBox";

import PageLayout from "../../features/LayoutContainers/PageLayout";

function CoverLayout({ color, header, title, description, top, children, defSize=3 }) {
  return (
    <PageLayout background="white">
      <Grid>
        <Grid item xs={11} sm={8} md={5} xl={defSize}>
          <SoftBox>
            <SoftBox px={3}>
              {!header ? "" : (
                header
              )}
            </SoftBox>
            <SoftBox>{children}</SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
