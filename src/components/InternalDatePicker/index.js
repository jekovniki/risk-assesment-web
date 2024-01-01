import styled from "@emotion/styled";

import SoftTypography from "../SoftTypography";
import SoftBox from "../SoftBox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InternalDatePicker({ label, value, onChange, mb=0, isRequired = false, disabled=false }) {
  return (
    <WrapperBox mb={mb}>
      <SoftBox>
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          {label} {isRequired ? <span style={{color: "red"}}>*</span> : ""}
        </SoftTypography>
      </SoftBox>
      <DatePickerUpd
            selected={value}
            onChange={onChange}
            dateFormat="yyyy-MM-dd"
            disabled={disabled}
        />
    </WrapperBox>
  );
}

export default InternalDatePicker;

const WrapperBox = styled(SoftBox)`
    > div {
        width: 100%;
    }
`

const DatePickerUpd = styled(DatePicker)`
    font: inherit;
    letter-spacing: inherit;
    height: 1.375rem;
    padding: 1.1rem 1.75rem 1.1rem 0.75rem;
    width: 100%!important;
    color: #495057;
    border: 0.0625rem solid #d2d6da;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;
`