import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import { search } from '../../services';

import DashboardLayout from "../../features/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../features/Navbars/DashboardNavbar";

import SoftBox from '../../components/SoftBox';
import { StandardBox } from '../../components/StandardBox';
import Loader from '../../components/Loader';
import PepBox from '../../components/PepBox';
import { DEFAULT_IMAGE } from '../../utils/constants';
import { InternalTabs } from '../../components/InternalTabs';

function PEP() {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const getAllPeps = useService(search.getPep);
    const params = useLocation();
    const id  = params.pathname.split('/pep/')[1];
    const [peps, setPeps] = useState([]);
    const data = peps.find(pep => pep._id === id);
    console.log('filteredData:', data);
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

    const getTabs = () => {
        return [{
            label: "Key Data",
            text: <div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>Key Data</div>
                    <div style={{flex: 3}}></div>
                </div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>Name</div>
                    <div style={{flex: 3}}>{data.name}</div>
                </div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>Record Update</div>
                    <div style={{flex: 3}}></div>
                </div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>Category</div>
                    <div style={{flex: 3}}>Political Individual</div>
                </div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>PEP Status</div>
                    <div style={{flex: 3}}>Active</div>
                </div>
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div style={{flex: 1, color: "rgba(68, 83, 114, 1)"}}>Special Interest Categories</div>
                    <div style={{flex: 3}}></div>
                </div>
            </div>
        }, {
            label: "Further Information",
            text: "No information"
        }, {
            label: "Aliases",
            text: "No information"
        }, {
            label: "Keywords",
            text: "No information"
        }, {
            label: "Pep Role Details",
            text: "No information"
        }, {
            label: "Connections/Relationships",
            text: "No information"
        }, {
            label: "Sources",
            text: <div style={{fontSize: "1rem"}}>
                <p><strong>Main source:</strong> Commission for confiscation of illegally acquired property <a href="https://www.caciaf.bg" target="_blank" rel="noreferrer">www.caciaf.bg</a></p>
            </div>
        }]
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={0}>
                {errorMessage ? <p>{errorMessage}</p> : ""}
                {loading ? <StandardBox><Loader customColor="blue" /></StandardBox> :
                    <SoftBox>
                        <StandardBox>
                            <PepBox
                                key={data._id} // Add a unique key to each PepBox
                                id={data._id}
                                image={DEFAULT_IMAGE}
                                name={data?.name}
                                dateOfBirth={data?.dateOfBirth ?? ""}
                                placeOfBirth={data?.placeOfBirth ?? ""}
                                gender={data?.gender ?? ""}
                                citizenship={data?.citizenship ?? "Bulgarian"}
                            />
                        </StandardBox>
                        <SoftBox mt={2}>
                            <InternalTabs data={getTabs()} />
                        </SoftBox>
                    </SoftBox>
                }
                <SoftBox>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default PEP;