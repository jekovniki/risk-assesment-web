import styled from "styled-components";
import Menu from "@mui/material/Menu";
import NotificationItem from "../NotificationItems";

const DropdownMenu = ({
    openDropdown = false,
    closeDropdown,
    items = [],
    anchorOrigin = { vertical: "bottom", horizontal: "right" }
}) => {
  if (!items || items.length === 0) {
    return "";
  }

    return (
        <Menu
            anchorEl={openDropdown}
            anchorReference={null}
            anchorOrigin={anchorOrigin}
            open={Boolean(openDropdown)}
            onClose={closeDropdown}
            sx={{ mt: 2 }}
        >
            {(() => {
                if (items?.length === 0) {
                    return <CustomDropdownItem 
                      key={1}
                      image=""
                      title="Nothing new"
                      date="No new updates"
                    />;
                }
                const render = [];
                let index = 1;
                for (const item of items) {
                    if ('type' in item && item.type === 'separator') {
                        render.push(<MenuSeparator key={index}></MenuSeparator>)
                    } else {
                        render.push(<CustomDropdownItem
                            key={index}
                            image={item.image}
                            title={[item.title]}
                            date={item.text}
                            onClick={item.onClick}
                            className={item.className ?? ""}
                        />);
                    }
                    index++;
                }
                return render;
            })()}
        </Menu>
    )
}


const MenuSeparator = styled.span`
  margin:.5rem 0;
  height:2px;
  background:rgba(0,0,0,.05);
  display:block;
`

const CustomDropdownItem = styled(NotificationItem)`
  &.logoutItem {
    > div:last-of-type {
      > span:first-of-type strong {
          color:red;
      }
    }
  }
  padding: 0.5rem;
  margin:0!important;
  > div:first-of-type {
    background:none;
    font-size:24px;
    color:#555;
    height:2rem;
    width:2rem;
    margin:0 .75rem 0 0;
  }
  > div:last-of-type {
    > span:first-of-type strong {
      font-size:1rem;
      font-weight:500;
      line-height:1;
    }
    > span:last-of-type {
      margin-top:0;
      span {
        display:none;
      }
    }
  }
`

export default DropdownMenu;