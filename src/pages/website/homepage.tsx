import styled from '@emotion/styled';

import Stage from '../../features/website/components/stage';
import OurServices from '../../features/website/components/our-services';
import Pricing from '../../features/website/components/pricing';
import AboutUs from '../../features/website/components/about-us';

import Overlay from "../../assets/overlay-homepage.png";
import OverlayImage from "../../assets/risk.png";
import Logo from "../../assets/RISK-LOGO.svg";

const WebsiteHomepage = () => {

    const handleSectionScroll = (section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <StyledWrapper >
                <StyledOverlayWrapper>
                    <StyledOverlay src={Overlay} alt="Overlay" />
                    <StyledOverlayImage src={OverlayImage} alt="Risk Assesment image" />
                </StyledOverlayWrapper>
            <StyledGrid>
                <StyledLogo src={Logo} alt="Logo" />
                <Navigation>
                    <NavigationLink onClick={() => { handleSectionScroll('our-services') }}>
                        Our Services
                    </NavigationLink>
                    <NavigationLink onClick={() => { handleSectionScroll('pricing') }}>
                        Pricing
                    </NavigationLink>
                    <NavigationLink onClick={() => { handleSectionScroll('about-us') }}>
                        About Us
                    </NavigationLink>
                    <NavigationLink onClick={() => { handleSectionScroll('contact-us') }}>
                        Contact Us
                    </NavigationLink>
                </Navigation>
            </StyledGrid>
            <Stage />
            <OurServices />
            <Pricing />
            <AboutUs />
        </StyledWrapper>
    )

}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column;
`;

const StyledLogo = styled.img`
    max-width: 200px;
    min-width: 50px;
    width: 100%;
    transition: .4s;

    @media only screen and (min-width: 1000px) {
        opacity: 0;

        &.show {
            opacity: 1;
            transition: .4s;
        }
    }
`;

const NavigationLink = styled.a`
    color: #fff;
    transition: .4s;
    &:hover {
        cursor: pointer;
        transition: .4s;
        color: rgba(255, 199, 0, 1);
    }
    margin-left: .5rem;
    @media only screen and (min-width: 500px) {
        margin-left: 1rem;
    }
    @media only screen and (min-width: 850px) {
        margin-left: 2rem;
    }
    @media only screen and (min-width: 1100px) {
        margin-left: 3rem;
    }
`

const Navigation = styled.div`
    width:100%;
    text-align: right;
    animation: show-homepage;
    animation-duration: 1.3s;
`;

const StyledGrid = styled.div`
    max-width: 1280px;
    width:100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1300px) {
        margin: 0 1rem;
    }
`

const StyledOverlayWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:-9;
    animation: slide-top-fade;
    animation-duration: 1s;

    img {
        width: 100%;
    }
`

const StyledOverlay = styled.img`
    height: 80vh;
`;

const StyledOverlayImage = styled.img`
    position: absolute;
    top:0;
    left:0;
    height: 80vh;
`


export default WebsiteHomepage;