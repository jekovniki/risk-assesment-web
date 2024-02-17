import styled from "@emotion/styled";

import DefaultLayout from "./containers/layout";
import Grid from "@mui/material/Grid";
import { WelcomeBox } from "./components/welcome-box";
import { SmallSearch } from "./components/small-search";
import { LatestSearch } from "./components/latest-search";
import { ResultCard } from "./components/result-card";

const Dashboard = () => {
    const latestSearchMock = [{
        name: "Delyan Peevski",
        keyData: ["OB", "S", "PEP"]
    }, {
        name: "Boyko Borissov",
        keyData: ["S", "PEP"]
    },{
        name: "Ahmed Dogan",
        keyData: ["S", "PEP"]
    },{
        name: "Toni Storaro",
        keyData: ["OB"]
    },{
        name: "Rumen Radev",
        keyData: ["OB", "PEP"]
    }]

    const resultCardMock = {
        name: "Delyan Slavchev Peevski",
        citizenship: "Bulgarian",
        locaiton: "Sofia, Bulgaria",
        gender: "Male",
        dateOfBirth: "27 July, 1980",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Delyan_Peevski_%2841NS%29.png"
    }
    return (
        <DefaultLayout title="Dashboard">
            <Grid container padding={2} paddingBottom={0}>
                <WelcomeBox name="Niki" />
            </Grid>
            <Grid container padding={2} >
                <Grid container xs={12} md={8} lg={9}>
                    <Grid item xs={12}>
                        <SmallSearch value="Delyan Peevski"/>
                    </Grid>
                    <Grid item xs={12} mt={2} mr={2}>
                        <ResultCard 
                            name={resultCardMock.name}
                            location={resultCardMock.locaiton}
                            dateOfBirth={resultCardMock.dateOfBirth}
                            gender={resultCardMock.gender}
                            imageSrc={resultCardMock.imageSrc}
                            citizenship={resultCardMock.citizenship}
                        />
                    </Grid>
                </Grid>
                <Grid container xs={12} md={4} lg={3} pl={6}>
                    <Grid item xs={12} md={11} lg={11}>
                        <LatestSearch input={latestSearchMock}/>
                    </Grid>
                </Grid>
            </Grid>
        </DefaultLayout>
    )
}

export default Dashboard;