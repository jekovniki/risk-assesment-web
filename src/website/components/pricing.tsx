import styled from "@emotion/styled"
import { mainColors, fonts } from "../../app/theme";
import { Box, Grid, Card } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const content = {
    title: "Pricing",
    text: "Choose the plan that best fits your needs.",
    plans: [{
        title: "Starter",
        text: "Start with us",
        features: [
            "PEP and Sanctions & Adverse Media",
            "Suitable for low risk industries with small amount of clients",
            "Data updated daily",
            "3 free scans daily, after that 2$ per scan",
            "No hidden cost"
        ]
    }, {
        title: "Traditional",
        text: "Get the standard needs for your business",
        features: [
            "PEP and Sanctions & Adverse Media",
            "Suitable for all industries",
            "Data updated daily",
            "50 free scans daily, after that 1$ per scan",
            "No hidden cost"
        ]
    }, {
        title: "Unique",
        text: "This is your custom plan",
        features: [
            "PEP and Sanctions & Adverse Media",
            "Suitable for all industries",
            "Data updated daily",
            "Unlimited amount of scans",
            "No hidden cost"
        ]
    }]
}

const Pricing = () => {
    return (
        <StyledSection id="pricing">
            <StyledHeading>{ content.title }</StyledHeading>
            <StyledText>{ content.text }</StyledText>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} mt={5} style={{ maxWidth: '1280px', margin: '2rem auto'}}>
                    {content.plans.map((plan: { title: string, text: string, features: any }) =>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card variant="outlined" style={{height:"100%"}}>
                            <StyledPricingWrapper className={plan.title === content.plans[1].title ? "marked" : ""}>
                                    <StyledPricingTitle>
                                        {plan.title}
                                    </StyledPricingTitle>
                                    <StyledPricingText>
                                        {plan.text}
                                    </StyledPricingText>
                                    <StyledPricingFeaturesList>
                                        {plan.features.map((item: string) => 
                                        <StyledPricingItem>
                                            <CheckBoxIcon />
                                            <div style={{paddingLeft: '.5rem'}}>{ item }</div>
                                        </StyledPricingItem>
                                    )}
                                    </StyledPricingFeaturesList>
                                </StyledPricingWrapper>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    box-sizing: border-box;
    padding: 2.5rem 1rem;
    margin: 5rem 0;
    background-color: ${mainColors.blue};
    color: ${mainColors.yellow};
    width: 100%;
`;

const StyledHeading = styled.h2`
    font-size: ${fonts.h2};
    margin-bottom: 0rem;
`;
const StyledText = styled.div`
    font-weight:600;
`;

const StyledPricingTitle = styled.h5`
    font-size: 1.5rem;
    margin-top:0;
`;

const StyledPricingText = styled.p``;

const StyledPricingWrapper = styled.div`
    padding: 2rem 1rem;
    height: 100%;
    color: ${mainColors.blue};
    transition: .4s;
    &.marked {
        background-color: ${mainColors.yellow};
        border: 1px solid ${mainColors.yellow};
    }
    &:hover {
        background-color: ${mainColors.yellow};
        transition: .4s;
        cursor:pointer;
    }
`;

const StyledPricingFeaturesList = styled.div`
    text-align: left;
`;

const StyledPricingItem = styled.div`
    display: flex;
    align-items: start;
    margin-bottom: 1rem;
`;


export default Pricing