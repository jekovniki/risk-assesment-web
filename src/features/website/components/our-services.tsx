import styled from "@emotion/styled"
import { mainColors, fonts } from "../../../app/theme";
import { Grid, Box, Card } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const content = {
    title: "Our Services",
    text: "Refine your risk management with Risk Assessment, delivering swift due diligence and PEPs monitoring sourced from reputable channels. Comply effortlessly with global AML regulations, mitigating the risks of Money Laundering and Terrorism Financing. Choose Risk Assessment for streamlined compliance and peace of mind.",
    ourServices: [{
        icon: <EmojiObjectsIcon />,
        title: "Comprehensive Due Diligence Solutions",
        text: "Dive into our suite of due diligence solutions meticulously designed to meet your compliance needs. From thorough background checks to real-time PEPs monitoring, Risk Assessment ensures your business stays ahead of financial risks."
    }, {
        icon: <PlumbingIcon />,
        title: "Proactive Risk Management Tools",
        text: "Take control of your risk management strategy with Risk Assessment's proactive tools. Our platform offers advanced risk assessment capabilities, enabling you to identify and mitigate potential financial crimes before they escalate. Stay one step ahead with Risk Assessment."
    }, {
        icon: <AccountBalanceIcon />,
        title: "AML Compliance Made Simple",
        text: "Navigate the complex landscape of Anti-Money Laundering (AML) regulations effortlessly with Risk Assessment. Our comprehensive compliance solutions streamline AML processes, reducing the burden on your organization while ensuring adherence to global standards."
    }, {
        icon: <GraphicEqIcon />,
        title: "Enhanced Financial Integrity Solutions",
        text: "Elevate your organization's financial integrity with Risk Assessment's suite of solutions. From detecting suspicious activities to preventing Money Laundering and Terrorism Financing, our platform empowers you to safeguard your business and uphold its reputation."
    }]
}

const OurServices = () => {

    return (
        <StyledSection id="our-services">
            <StyledTitle>{content.title}</StyledTitle>
            <StyledText><p>{content.text}</p></StyledText>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} mt={5}>
                    {content.ourServices.map((service: { icon: any, title: string, text: string }) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card variant="outlined" style={{height:"100%"}}>
                                <StyledServiceWrapper>
                                    <StyledIconWrapper>
                                        {service.icon}
                                    </StyledIconWrapper>
                                    <StyledServiceTitle>
                                        {service.title}
                                    </StyledServiceTitle>
                                    <StyledServiceText>
                                        {service.text}
                                    </StyledServiceText>
                                </StyledServiceWrapper>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </StyledSection>
    )
}

const StyledTitle = styled.h2`
    color: ${mainColors.blue};
    font-size: ${fonts.h2};
    margin-bottom: 1rem;
`;

const StyledSection = styled.section`
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: ${mainColors.blue};
    max-width: 1280px;
    width: 100%;
    animation: show-homepage;
    animation-duration: 3.6s;
`;

const StyledText = styled.div``;

const StyledIconWrapper = styled.div`
    svg {
        width: 3rem;
        height: 3rem;
    }
`;

const StyledServiceTitle = styled.h5`
    font-size: 1.25rem;
`;

const StyledServiceText = styled.p``;

const StyledServiceWrapper = styled.div`
    padding: 2rem 1rem;
    height: 100%;
    color: ${mainColors.blue};
    transition: .4s;
    &:hover {
        background-color: ${mainColors.yellow};
        transition: .4s;
        cursor:pointer;
    }
`;

export default OurServices;