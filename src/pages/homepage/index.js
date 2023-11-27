import styled from 'styled-components';
import CoverLayout from "../../layouts/CoverLayout";
import Container from "@mui/material/Container";

import SoftBox from "../../components/SoftBox/index";

import RiskAssesmentImage from "../../assets/images/risk.png";
import PolygonOverlay from "../../assets/images/overlay-homepage.png";

function Homepage() {
    return (
        <CoverLayout>
            <ImageWrapper>
                <OverlayImage src={PolygonOverlay} alt="Overlay" />
                <StageImage src={RiskAssesmentImage} />
            </ImageWrapper>
            <Container maxWidth="xl">
                <ContainerData>
                    <SoftBox mr={5}>
                        <NavigationMenu>
                            <MenuList>
                                <MenuItems>
                                    <Link href="/">Our Services</Link>
                                </MenuItems>
                                <MenuItems>
                                    <Link href="/">Pricing</Link>
                                </MenuItems>
                                <MenuItems>
                                    <Link href="/">About Us</Link>
                                </MenuItems>
                                <MenuItems>
                                    <Link href="/">Contact Us</Link>
                                </MenuItems>
                                <MenuItems>
                                    <Link href="/sign-in">Sign In</Link>
                                </MenuItems>
                            </MenuList>
                        </NavigationMenu>
                    </SoftBox>
                    <SoftBox>
                        <ContentBox>
                            <Slogan>Your <Strong>Safety</Strong>, Our <Strong>Priority</Strong></Slogan>
                            <StageText>Our PEP Check service offers meticulous screening of Politically Exposed Persons, minimizing financial and reputational risks. Stay compliant and secure with our advanced verification, empowering your business to make informed decisions effortlessly.</StageText>
                            <SmallText>Try it now</SmallText>
                            <SearchBox>
                                <SearchBoxSplit>
                                    <Search placeholder="Boyko Borisov" />
                                    <SearchButton>
                                        Check Now
                                    </SearchButton>
                                </SearchBoxSplit>
                            </SearchBox>
                        </ContentBox>
                    </SoftBox>
                </ContainerData>
            </Container>
        </CoverLayout>

    );
}

const NavigationMenu = styled.div`
    position:relative;
    z-index: 999;
    display: flex;
    width: 100%;
    color: #fff;
`

const MenuList = styled.ul`
    display: flex;
    padding-inline-start:0;
    list-style-type: none;
    margin-top: 40px;
    margin-left:auto;
`;

const MenuItems = styled.li`
    margin-left: 1rem;
    margin-right: 2rem;
`;

const Link = styled.a`
    color: #fff;
    font-size: 1rem;
    line-height: 21.79px;
    transition: .4s;
    &:hover {
        color: #FFC700;
        transition: .4s;
    }
`;

const ImageWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
`

const StageImage = styled.img`
    width: 100%;
    position:absolute;
    top:0;
    left:0;
    opacity: 1;
`

const OverlayImage = styled.img`
    width:100%;
`

const ContainerData = styled.div`
    width:100%;
    position: absolute;
    top:0;
    left:0;
    z-index:9999;
`;

const ContentBox = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow:column;
    align-items: center;
`;

const Slogan = styled.h1`
    color: #fff;
    font-weight: 100;
    font-size: 70px;
    line-height: 95.34px;
    margin-top: 60px;
`;

const Strong = styled.span`
    font-weight: 700;
`;

const StageText = styled.p`
    margin-top: 30px;
    color: #fff;
    font-weight: 200;
    font-size: 18px;
    opacity: .8;
    max-width: 800px;
    width: 85%;
`;

const SmallText = styled.p`
    color: #fff;
    opacity: .4;
    margin-top: 100px;
    font-weight: 300;
    font-size: 14px;
    line-height: 30px;
`;

const SearchBox = styled.div`
    max-width: 700px;
    width: 85%;
    height: 100px;
    margin-top: 100px;
    border-radius: 3px;
    background-color: #FFC700;
`;

const SearchBoxSplit = styled.div`
    display: flex;
    height: calc(100% - 20px);
    margin: 10px;
    border-radius: 3px;
`;

const Search = styled.input`
    flex: 3;
    border-radius: 3px;
    font-size: 1.25rem;
    background-color: rgba(0, 0, 0, .15);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 100;
    border:none;
    padding-left: 2rem;
`;

const SearchButton = styled.button`
    flex: 1;
    margin-left: 10px;
    font-size: 18px;
    line-height: 30px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background: linear-gradient(180deg, #007AEB 0%, #0063BF 100%);
    transition: .4s;

    &:hover {
        cursor: pointer;
        transition: .4s;
        background: linear-gradient(180deg, #007AEB 100%);

    }
`;

export default Homepage;