import styled from "styled-components";

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const ProfileBox = ({handleOpen = () => {}, userData }) => {

    return (
        <HeaderProfileBox onClick={handleOpen}>
            <div>
                <h4>{userData?.email ?? ""}</h4>
            </div>
            <span onClick={handleOpen}>
                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
            </span>
        </HeaderProfileBox>
    )
}


const HeaderProfileBox = styled.div`
  display:flex;
  align-items:center;
  &:hover {
    cursor: pointer;
  }
  img {
    height: 40px;
    width:40px;
    border-radius:3px;
    box-shadow:0 5px 8px rgba(0,0,0,.1);
    margin-right:1rem;
  }
  h4 {
    font-size:1rem;
    font-weight: 500;
  }
  h5 {
    font-size: 0.75rem;
    font-weight: 400;
    color: #8392ab;
    margin-top:5px;
  }
  span {
    height:32px;
    width:32px;
    display:flex;
    align-items: center;
    justify-content: center;
    background:#f0f0f0;
    margin-left:1rem;
    border-radius:3px;
    color:#555;
    cursor: pointer;
    transition:all .3s ease;
    &:hover {
      transform:scale(1.1);
      color:#000;
      transition:all .3s ease;
    }
  }
`