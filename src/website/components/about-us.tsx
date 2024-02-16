import styled from "@emotion/styled";
import { mainColors, fonts } from "../../app/theme";
import { Box, Grid } from "@mui/material";
import AboutUsImage from '../../assets/about-us.png';

const content = {
    title: "About us",
    text: "At Risk Assessment, we're not just a company; we're a collaboration born from the expertise of three seasoned entrepreneurs, each bringing unique skills and experiences to the table. Our journey began with a visionary developer, boasting eight years of immersive experience in crafting innovative solutions. Alongside stands a seasoned compliance veteran, with five years of navigating the intricate landscapes of regulatory frameworks. Complementing this dynamic duo is a tenacious money laundering professional and investigator, wielding eight years of hands-on expertise in deciphering financial intricacies. Together, we are Risk Assessment - driven by the shared mission of fortifying businesses against financial risks, one solution at a time. With our combined wealth of knowledge and unwavering commitment to excellence, we stand poised to revolutionize the realm of risk assessment and compliance, empowering businesses to thrive in an ever-evolving landscape. Join us as we pave the way for a future where risk is assessed with precision, integrity, and foresight."
}

const AboutUs = () => {
    return (
        <StyledSection id="about-us">
            <StyledWrapper>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                                <StyledImage src={AboutUsImage} alt="About us" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{marginTop: "auto", marginBottom: "auto", textAlign: "left"}}>
                            <StyledTitle>{content.title}</StyledTitle>
                            <StyledText>
                                { content.text }
                            </StyledText>
                        </Grid>
                    </Grid>
                </Box>
            </StyledWrapper>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    box-sizing: border-box;
    padding: 1rem;
    margin: 5rem 0;
    width: 100%;
    color: ${mainColors.blue};
`;

const StyledImage = styled.img``;

const StyledTitle = styled.h2`
    color: ${mainColors.blue};
    font-size: ${fonts.h2};
    margin-bottom: 1rem;
`;

const StyledText = styled.p`
    line-height: 1.6rem;
    font-size: 1rem;
`;

const StyledWrapper = styled.div`
    max-width:1280px;
    width:100%;
    margin-left:auto;
    margin-right: auto;
`;

export default AboutUs;