import SoftTypography from "../SoftTypography";
import { Select, MenuItem } from "@mui/material";
import SoftBox from "../SoftBox";
import { styled } from "styled-components";

function InternalSelect({ label, value, onChange, options = [], mb = 0, isRequired = false, disabled = false, iserror = false }) {
  return (
    <SoftBox mb={mb}>
      <SoftBox>
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          {label} {isRequired ? <span style={{ color: "red" }}>*</span> : ""}
        </SoftTypography>
      </SoftBox>
      <WrapperSelect>
        <CustomSelect
          value={value}
          onChange={onChange}
          variant="outlined"
          fullWidth
          disabled={disabled}
          style={{
            position: "relative",
            paddingTop: "1.32rem!important",
            paddingBottom: "1.32rem!important",
            border: iserror ? "1px solid red" : "0.0625rem solid #d2d6da" 
          }}
          sx={{
            borderRadius: "8px",
            border: "1px solid #ddd",
            "& .MuiSelect-select": {
              padding: "8px",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CustomSelect>
      </WrapperSelect>
    </SoftBox>
  );
}

const WrapperSelect = styled.div`
  >div {
    position:relative;
    padding: 1.21rem!important;
  }
`

const CustomSelect = styled(Select)`
position:relative;
.MuiSelect-select.MuiSelect-outlined {
  position:absolute;
  padding:1.375rem 0!important;
  height:calc(38px - 1rem);
  width:100%!important;
  height:100%!important;
}
.MuiSelect-nativeInput  {
  display:none;
}
  svg {
    display:block!important;
  }
`

export default InternalSelect;
