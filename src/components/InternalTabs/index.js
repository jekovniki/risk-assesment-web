import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { StandardBox } from '../StandardBox';

export const InternalTabs = ({ 
    data = [
        { label: "Item one", text: "Item one"},
        { label: "Item two", text: "Item two"},
        { label: "Item three", text: "Item three"}
    ] }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let tabIndex = 0;
    let panelIndex = 0;
    return (
        <CustomBoxWrapper sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange} aria-label="Tabs">
                        {data.map((item) => (
                            <CustomTab label={item.label} value={(tabIndex++).toString()}  />
                        ))}
                    </TabList>
                </Box>
                {data.map((item) => (
                    <CustomPanel value={(panelIndex++).toString()}>{ item.text }</CustomPanel>
                ))}
            </TabContext>
        </CustomBoxWrapper>
    );
}

const CustomPanel = styled(TabPanel)`
    border-radius: 5px;
    padding: 2rem;
    background-color: #fff!important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1rem;
`

const CustomTab = styled(Tab)`
    border-radius: 5px;
    padding: 2rem;
    border-bottom-left-radius: 0!important;
    border-bottom-right-radius: 0!important;
    background-color: rgba(0, 0, 0, 0.05)!important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 3.5rem;
    &[aria-selected='true'] {
        background-color: #fff!important;
    }
`;

const CustomBoxWrapper = styled(Box)`
    > div > div {
        padding:0!important;
    }
`