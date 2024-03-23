import styled from "@emotion/styled";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


interface IStatisticsBox {
    title: string;
    items: Array<{ text: string | undefined, value: number | string }>
}

const StatisticsBox = ({ title, items }: IStatisticsBox) => {
    const [open, setOpen] = useState(false);
    return (
        <StyledCard>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: 'pointer'
            }}
            onClick={() => { setOpen(!open)}}
            >
                <StyledGroups>
                    { title }
                </StyledGroups>
                { items.length ? 
                    <StyledDropButton>
                        { open ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                    </StyledDropButton> : ""
                }
            </div>
            { open ? 
                <StyledDropdown>
                    { items.map(item => 
                    <p>
                        <strong>{ item.text ?? "" } { item.value ? typeof item.value === 'number' && item.value > 0 ? 
                        <>(<span>{ item.value}</span>)</> : <>({ item.value })</> : "" }</strong>
                    </p>
                    )}
                </StyledDropdown> 
                : 
                "" 
            }
        </StyledCard>
    )
}

const StyledCard = styled.div`
    position: relative;
    padding: 1.8rem;
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;

const StyledDropButton = styled.div`
`;

const StyledDropdown = styled.div`
    text-align: left;
    span {
        color: red;
    }
`;

const StyledGroups = styled.div`
    text-align: left;
`;

export default StatisticsBox;