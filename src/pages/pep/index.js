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

function PEP() {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const getAllPeps = useService(search.getPep);
    const params = useLocation();
    const id  = params.pathname.split('/pep/')[1];
    const [peps, setPeps] = useState([]);
    const data = peps.find(pep => pep._id === id);
    
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
                    </SoftBox>
                }
                <SoftBox>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default PEP;