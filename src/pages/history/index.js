import styled from 'styled-components';

import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import DashboardLayout from "../../features/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../features/Navbars/DashboardNavbar";

import SoftTypography from '../../components/SoftTypography';
import SoftBox from '../../components/SoftBox';

import { getLatestSearch } from '../../utils/helpers';
import { StandardBox } from '../../components/StandardBox';

function History() {
    const latestSearches = getLatestSearch();
    let allSearches = []
    if (latestSearches) {
        allSearches = latestSearches.slice(-5);
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={0}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <HomepageGrid item xs={12}>
                            <Card style={{ display: "flex", alignItems: "stretch", borderRadius: "5px", background: "linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%)" }}>
                                <SoftBox p={4} display="flex" flexDirection="column" justifyContent="space-between">
                                    <SoftBox>
                                        <SoftTypography pb={2} variant="h2" fontWeight="medium" textTransform="capitalize">
                                            <HeadlineText>
                                                Search history
                                            </HeadlineText>
                                        </SoftTypography>
                                    </SoftBox>
                                </SoftBox>
                            </Card>
                        </HomepageGrid>
                    </Grid>
                </SoftBox>
                <SoftBox>
                    <div>
                        {allSearches.map((pep) => (
                            <StandardBox>
                                <LatestNameSearch>{pep}</LatestNameSearch>
                            </StandardBox>
                        ))}
                    </div>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

const LatestNameSearch = styled.p`
    font-size: 1.425rem;
    line-height: 21px;
    margin-bottom: .425rem;
`

const HeadlineText = styled.p`
    font-size: 46px;
    line-height: 55.2px;
    font-weight: 250;
    color: #fff;
    margin-bottom:0;
    padding-bottom:0;
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

export default History;