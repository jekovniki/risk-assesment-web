import styled from 'styled-components';
import { useEffect, useState } from "react";
import useService from '../../hooks/useService';
import { search } from '../../services';

import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import DashboardLayout from "../../features/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../features/Navbars/DashboardNavbar";

import SoftTypography from '../../components/SoftTypography';
import SoftBox from '../../components/SoftBox';
import { StandardBox } from '../../components/StandardBox';

import { arrowRight } from '../../assets/svg/arrow-right';
import Loader from '../../components/Loader';
import DashboardSearch from '../../features/DashboardSearch';


function Dashboard() {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [peps, setPeps] = useState(null);
    const getAllPeps = useService(search.getPep);
    useEffect(() => {
        setLoading(true);
        getAllPeps.executeService();
    }, []);

    useEffect(() => {
        if (getAllPeps?.result?.data) {
            setLoading(false)
            setPeps(getAllPeps.result.data);
        }
        if (getAllPeps?.error) {
            setLoading(false);
            setErrorMessage(getAllPeps.error.message);
        }
    }, [getAllPeps.result, getAllPeps.error])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={0}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <div>{errorMessage ?? ""}</div>
                        <HomepageGrid item xs={12}>
                            <Card style={{ display: "flex", alignItems: "stretch", borderRadius: "5px", background: "linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%)" }}>
                                <SoftBox p={4} display="flex" flexDirection="column" justifyContent="space-between">
                                    <SoftBox>
                                        <SoftTypography pb={2} variant="h2" fontWeight="medium" textTransform="capitalize">
                                            <HeadlineText>
                                                Hello <strong>Nikolay</strong>,
                                            </HeadlineText>
                                            <Text>Welcome to our pep check services! We're here to ensure you receive the best assistance possible.<br />How can we support you today?</Text>
                                        </SoftTypography>
                                    </SoftBox>
                                </SoftBox>
                            </Card>
                        </HomepageGrid>
                    </Grid>
                </SoftBox>
                <SoftBox>
                    <Grid spacing={3} p={3} container>
                        <DashboardSearch loading={loading} pepList={peps} />
                        <Grid xs={12} md={4}>
                            <StandardBox ml={2}>
                                <TwoColumns>
                                    <LatestSearchTitle>Latest Searches</LatestSearchTitle>
                                    <div>
                                        {arrowRight()}
                                    </div>
                                </TwoColumns>
                            </StandardBox>
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

const TwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PepBox = styled.div`
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

const HeadlineText = styled.p`
    font-size: 46px;
    line-height: 55.2px;
    font-weight: 250;
    color: #fff;
    margin-bottom: 1rem;
`;

const Text = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 21.2px;
`;

const LatestSearchTitle = styled.div`
    color: rgba(68, 83, 114, 1);
    font-size: 1rem;
    line-height: 21.2px;
    font-weight:200;
`;

const HomepageGrid = styled(Grid)`
    > div {
        height: 100%;
        > div {
            height: 100%;
            > div {
                height: 100%;
            }
        }
    }
 `

const Search = styled.input`
    flex: 3;
    border-radius: 3px;
    font-size: 1.25rem;
    background-color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    color: #333;
    font-weight: 100;
    border:none;
    padding-left: 2rem;
    width:100%;
`;

export default Dashboard;