import styled from "@emotion/styled";
import { useState } from "react";

import DefaultLayout from "./containers/layout";
import { Grid } from "@mui/material";
import { WelcomeBox } from "./components/welcome-box";
import { SmallSearch } from "./components/small-search";
import { LatestSearch } from "./components/latest-search";
import { ResultCard } from "./components/result-card";
import { useGetUser } from "../../app/services/users";
import { Loader } from "./components/loader";

const Dashboard = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";
    const firstName = data && data.firstName ? data.firstName : "";
    const latestSearchMock = [{
        name: "Delyan Peevski",
        keyData: ["OB", "S", "PEP"]
    }, {
        name: "Boyko Borissov",
        keyData: ["S", "PEP"]
    }, {
        name: "Ahmed Dogan",
        keyData: ["S", "PEP"]
    }, {
        name: "Toni Storaro",
        keyData: ["OB"]
    }, {
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
        <DefaultLayout title="Dashboard" email={email}>
            {isLoading ? 
            <Loader /> :
                <>
                    <Grid container padding={2} paddingBottom={0}>
                        <WelcomeBox name={firstName} />
                    </Grid>
                    <Grid container padding={2} >
                        <Grid container item xs={12} md={8} lg={9}>
                            <Grid item xs={12}>
                                <SmallSearch value="Delyan Peevski" />
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
                        <Grid container item xs={12} md={4} lg={3} pl={6}>
                            <Grid item xs={12} md={11} lg={11}>
                                <LatestSearch input={latestSearchMock} />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </DefaultLayout>
    )
}

export default Dashboard;