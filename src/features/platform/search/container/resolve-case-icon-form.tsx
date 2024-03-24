import { useState } from "react";
import styled from "@emotion/styled";
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import { Popover } from "@mui/material";
import { ResolveCaseForm } from "../components/resolve-case-form";



const ResolveCaseIconForm = ({ id } : { id: string}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const ariaId = open ? 'simple-popover' : undefined;

    return (
        <StyledWrapper>
            <span aria-describedby={ariaId} onClick={handleClick} style={{ display: "flex", alignItems: "center"}}>
                <span style={{marginRight: '1rem'}}>Person ID Check: <strong>{ id }</strong></span>
                <SensorOccupiedOutlinedIcon />
            </span>
            <Popover
                id={ariaId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <ResolveCaseForm />
            </Popover>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    position: relative;
`;

export default ResolveCaseIconForm;