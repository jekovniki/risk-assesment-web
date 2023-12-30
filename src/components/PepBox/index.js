import styled from 'styled-components';

import { arrowRight } from '../../assets/svg/arrow-right';

const PepBox = ({
    image = "",
    name = "",
    dateOfBirth = "",
    placeOfBirth = "",
    gender = "",
    citizenship = ""
}) => {

    return (
        <PepWrapper>
            <PepImage src={image} alt={name} />
            <PepContentBox>
                <TwoColumns>
                    <div>{ name }</div>
                    <div>{arrowRight()}</div>
                </TwoColumns>
                <PepDataWrapper>
                    <PepDataBox>
                        <LabelBox>Date Of Birth</LabelBox>
                        <DataBox>{ dateOfBirth }</DataBox>
                    </PepDataBox>
                    <PepDataBox>
                        <LabelBox>Place of Birth</LabelBox>
                        <DataBox>{ placeOfBirth }</DataBox>
                    </PepDataBox>
                    <PepDataBox>
                        <LabelBox>Gender</LabelBox>
                        <DataBox>{ gender }</DataBox>
                    </PepDataBox>
                    <PepDataBox>
                        <LabelBox>Citizenship</LabelBox>
                        <DataBox>{ citizenship }</DataBox>
                    </PepDataBox>
                </PepDataWrapper>
            </PepContentBox>
        </PepWrapper>
    )
}


const TwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PepWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PepContentBox = styled.div`
    width: 100%;
`;

const LabelBox = styled.div`
    color: #666;
    font-size: 14px;
    font-weight: 300;
`;

const DataBox = styled.div`
    
`;

const PepImage = styled.img`
    border-radius: 3px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 1rem;
`;

const PepDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    font-size: 1rem;
`;

const PepDataBox = styled.div``;

export default PepBox;