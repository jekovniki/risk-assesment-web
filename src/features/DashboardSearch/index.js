import styled from 'styled-components';

import { useState } from 'react';

import Grid from "@mui/material/Grid";
import SoftBox from '../../components/SoftBox';
import { StandardBox } from '../../components/StandardBox';
import PepBox from '../../components/PepBox';

import Loader from '../../components/Loader';
import { setSearch } from '../../utils/helpers';

const DashboardSearch = ({
    loading = false,
    pepList = null
}) => {
    const [pepFilter, setPepFilter] = useState(null);
    const [pepName, setPepName] = useState("");

    const getPep = () => {
        const result = pepList.filter(pep => pep.name.includes(pepName));
        setSearch(pepName);
        setPepFilter(result);
    }

    return (
        <Grid xs={12} md={8}>
            {loading ? <Loader customColor="rgb(46, 136, 219)" /> :
                <>
                    <StandardBox>
                        <TwoColumns>
                            <div style={{ width: "55%" }}>
                                <Search placeholder="Search by name" onChange={(event) => { setPepName(event.target.value) }} />
                            </div>
                            <div style={{
                                display: "flex"
                            }}>
                                <PerformSearch pt={2} pb={2} pl={4} pr={4} mr={2} style={{
                                    background: "linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%)",
                                    color: "#fff",
                                    borderRadius: "3px"
                                }}
                                    onClick={getPep}
                                >
                                    Perform a Search
                                </PerformSearch>
                                <SoftBox pt={2} pb={2} pl={3} pr={3} style={{
                                    background: "rgba(14, 26, 50, 1)",
                                    borderRadius: "3px",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.375 0.75C6.59519 0.75 5.08888 1.93802 4.60339 3.5625H1.625C1.004 3.5625 0.5 4.0665 0.5 4.6875C0.5 5.3085 1.004 5.8125 1.625 5.8125H4.60339C5.08888 7.43698 6.59519 8.625 8.375 8.625C10.1548 8.625 11.6611 7.43698 12.1466 5.8125H26.375C26.996 5.8125 27.5 5.3085 27.5 4.6875C27.5 4.0665 26.996 3.5625 26.375 3.5625H12.1466C11.6611 1.93802 10.1548 0.75 8.375 0.75ZM8.375 3C9.30538 3 10.0625 3.75712 10.0625 4.6875C10.0625 5.61788 9.30538 6.375 8.375 6.375C7.44462 6.375 6.6875 5.61788 6.6875 4.6875C6.6875 3.75712 7.44462 3 8.375 3ZM19.625 8.0625C17.8452 8.0625 16.3389 9.25052 15.8534 10.875H1.625C1.004 10.875 0.5 11.379 0.5 12C0.5 12.621 1.004 13.125 1.625 13.125H15.8534C16.3389 14.7495 17.8452 15.9375 19.625 15.9375C21.4048 15.9375 22.9111 14.7495 23.3966 13.125H26.375C26.996 13.125 27.5 12.621 27.5 12C27.5 11.379 26.996 10.875 26.375 10.875H23.3966C22.9111 9.25052 21.4048 8.0625 19.625 8.0625ZM19.625 10.3125C20.5554 10.3125 21.3125 11.0696 21.3125 12C21.3125 12.9304 20.5554 13.6875 19.625 13.6875C18.6946 13.6875 17.9375 12.9304 17.9375 12C17.9375 11.0696 18.6946 10.3125 19.625 10.3125ZM10.625 15.375C8.84519 15.375 7.33888 16.563 6.85339 18.1875H1.625C1.004 18.1875 0.5 18.6915 0.5 19.3125C0.5 19.9335 1.004 20.4375 1.625 20.4375H6.85339C7.33888 22.062 8.84519 23.25 10.625 23.25C12.4048 23.25 13.9111 22.062 14.3966 20.4375H26.375C26.996 20.4375 27.5 19.9335 27.5 19.3125C27.5 18.6915 26.996 18.1875 26.375 18.1875H14.3966C13.9111 16.563 12.4048 15.375 10.625 15.375ZM10.625 17.625C11.5554 17.625 12.3125 18.3821 12.3125 19.3125C12.3125 20.2429 11.5554 21 10.625 21C9.69462 21 8.9375 20.2429 8.9375 19.3125C8.9375 18.3821 9.69462 17.625 10.625 17.625Z" fill="white" />
                                    </svg>
                                </SoftBox>
                            </div>
                        </TwoColumns>
                    </StandardBox>
                    {pepFilter ? (
                        <>
                            {pepFilter.map((pep) => (
                                <StandardBox>
                                    <PepBox
                                        key={pep.id} // Add a unique key to each PepBox
                                        image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Delyan_Peevski_%2841NS%29.png"
                                        name={pep?.name}
                                        dateOfBirth={pep?.dateOfBirth ?? ""}
                                        placeOfBirth={pep?.placeOfBirth ?? ""}
                                        gender={pep?.gender ?? ""}
                                        citizenship={pep?.citizenship ?? "Bulgarian"}
                                    />
                                </StandardBox>
                            ))}
                        </>
                    )
                        : ""}
                </>
            }
        </Grid>
    )
}


const TwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

const PerformSearch = styled(SoftBox)`
    transition: .4s;
    &:hover {
        cursor: pointer;
        transition: .4s;
        transform: scale(1.02);
    }
`


export default DashboardSearch;