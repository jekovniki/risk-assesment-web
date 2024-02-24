import styled from "@emotion/styled"

const SummaryDropdown = ({ name }: { name: string }) => {

    return (
        <StyledCard>
            <div>
                <StyledGroups>
                    { name }
                </StyledGroups>
            </div>
        </StyledCard>
    )
}


const StyledGroups = styled.div`
    text-align: left;
`;

const StyledCard = styled.div`
    padding: 1.8rem;
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;

export default SummaryDropdown;