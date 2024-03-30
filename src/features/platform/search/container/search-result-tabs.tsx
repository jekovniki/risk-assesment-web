import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SearchResultTabs } from '../components/search-result-tab-panel';
import TabRow from '../components/tab-row';
import { format } from 'date-fns';
import { COUNTRY_FLAGS } from '../../../../utils/countries';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTabs = ({ data }: { data: Record<string, any> }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    console.log('tab data: ', data);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        label="Key Data"
                        {...a11yProps(0)}
                        style={{
                            color: value === 0 ? 'rgba(14, 26, 50, 1)' : 'rgba(14, 26, 50, 0.75)',
                            backgroundColor: value === 0 ? '#fff' : 'rgba(0, 0, 0, 0.05)',
                            borderBottomColor: value === 0 ? 'transparent' : 'transparent',
                        }}
                    />
                    <Tab
                        label="Further Information"
                        {...a11yProps(1)}
                        style={{
                            color: value === 1 ? 'rgba(14, 26, 50, 1)' : 'rgba(14, 26, 50, 0.75)',
                            backgroundColor: value === 1 ? '#fff' : 'rgba(0, 0, 0, 0.05)',
                            borderBottomColor: value === 1 ? 'transparent' : 'transparent',
                            marginLeft: ".5rem"
                        }}
                    />
                    <Tab
                        label="Aliases"
                        {...a11yProps(2)}
                        style={{
                            color: value === 2 ? 'rgba(14, 26, 50, 1)' : 'rgba(14, 26, 50, 0.75)',
                            backgroundColor: value === 2 ? '#fff' : 'rgba(0, 0, 0, 0.05)',
                            borderBottomColor: value === 2 ? 'transparent' : 'transparent',
                            marginLeft: ".5rem"
                        }}
                    />
                    <Tab
                        label="Keywords"
                        {...a11yProps(3)}
                        style={{
                            color: value === 3 ? 'rgba(14, 26, 50, 1)' : 'rgba(14, 26, 50, 0.75)',
                            backgroundColor: value === 3 ? '#fff' : 'rgba(0, 0, 0, 0.05)',
                            borderBottomColor: value === 3 ? 'transparent' : 'transparent',
                            marginLeft: ".5rem"
                        }}
                    />
                    <Tab
                        label="Connections/Relations"
                        {...a11yProps(4)}
                        style={{
                            color: value === 4 ? 'rgba(14, 26, 50, 1)' : 'rgba(14, 26, 50, 0.75)',
                            backgroundColor: value === 4 ? '#fff' : 'rgba(0, 0, 0, 0.05)',
                            borderBottomColor: value === 4 ? 'transparent' : 'transparent',
                            marginLeft: ".5rem"
                        }}
                    />
                </Tabs>
            </Box>
            <SearchResultTabs value={value} index={0}>
                <TabRow name='Key Data'>{ data?.datasets?.map((set: string) => <span style={{
                    padding: '.5rem',
                    border: '1px solid red',
                    marginRight: '.75rem',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    color: '#fff'
                }}>{ set }</span> )}</TabRow>
                <TabRow name="Name">{data.caption}</TabRow>
                <TabRow name="Record Update">
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                        <div style={{ color: '#000', marginRight: "1.5rem" }}>Entered Date</div>
                        <div style={{ color: '#000', marginRight: "1.5rem" }}>{data.first_seen ? format(data.first_seen, 'PPP') : ""}</div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ color: '#000', marginRight: "1.5rem" }}>Updated Date</div>
                        <div style={{ color: '#000', marginRight: "1.5rem" }}>{data.last_change ? format(data.last_change, 'PPP') : ""}</div>
                    </div>
                </TabRow>
                <TabRow name="Notes">
                    {data?.properties?.notes.toString()}
                </TabRow>
                <TabRow name="Keywords">
                    {data?.properties?.keywords.toString()}
                </TabRow>
                <TabRow name="Position">
                    {data?.properties?.position?.map((position: string) => <div style={{ marginBottom: "1rem" }}>{position}</div>)}
                </TabRow>
                <TabRow name="Source URL">
                    {data?.properties?.sourceUrl?.map((link: string) => <div style={{
                        marginBottom: data.properties.sourceUrl.length > 1 ? "1rem" : "0"
                    }}><a href={link} target="_blank" >{link}</a></div>)
                    }
                </TabRow>
            </SearchResultTabs>
            <SearchResultTabs value={value} index={1}>
                <TabRow name="Address">
                    {data?.properties?.address.toString()}
                </TabRow>
                <TabRow name="Passport Number">
                    {data?.properties?.passportNumber?.[0]}
                </TabRow>
                <TabRow name="Birth place">
                    {data?.properties?.birthPlace.toString()}
                </TabRow>
                <TabRow name="Birth date">
                    {data?.properties?.birthDate ? format(data.properties.birthDate[0], 'PPP') : ""}
                </TabRow>
                <TabRow name="Education">
                    {data?.properties?.education?.map((education: string) => <div style={{
                        marginBottom: data.properties.education.length > 1 ? "1rem" : "0"
                    }}>{education}</div>)
                    }
                </TabRow>
                <TabRow name="Gender">
                    {data?.properties?.gender?.map((gender: string) => <div style={{
                        marginBottom: data.properties.gender.length > 1 ? "1rem" : "0"
                    }}>{gender}</div>)
                    }
                </TabRow>
                <TabRow name="Nationality">
                    {data?.properties?.nationality?.map((code: string) => {
                        const country = COUNTRY_FLAGS.find(flag => flag.code?.toLowerCase() === code.toLowerCase());

                        return country ? <div style={{ width: "32px", marginRight: "10px" }} dangerouslySetInnerHTML={{ __html: country.flag }}></div> : null;
                    })}
                </TabRow>
                <TabRow name="Religion">
                    {data?.properties?.religion?.map((religion: string) => <div style={{
                        marginBottom: data.properties.religion.length > 1 ? "1rem" : "0"
                    }}>{religion}</div>)
                    }
                </TabRow>
                <TabRow name="Email">
                    {data?.properties?.email?.map((mail: string) => <div style={{
                        marginBottom: data.properties.email.length > 1 ? "1rem" : "0"
                    }}>{ mail }</div>)
                    }
                </TabRow>
                <TabRow name="Website">
                    {data?.properties?.website?.map((website: string) => <div style={{
                        marginBottom: data.properties.website.length > 1 ? "1rem" : "0"
                    }}><a href={website} target="_blank" >{website}</a></div>)
                    }
                </TabRow>
            </SearchResultTabs>
            <SearchResultTabs value={value} index={2}>
                <TabRow name="Aliases">
                    {data?.properties?.alias?.map((name: string) => <div style={{
                        marginBottom: data.properties.alias.length > 1 ? "1rem" : "0"
                    }}>{name}</div>)
                    }
                </TabRow>
                <TabRow name="Weak alias">
                    {data?.properties?.weakAlias?.map((name: string) => <div style={{
                        marginBottom: data.properties.weakAlias.length > 1 ? "1rem" : "0"
                    }}>{name}</div>)
                    }
                </TabRow>
            </SearchResultTabs>
            <SearchResultTabs value={value} index={3}>
                <TabRow name="Keywords">
                    {data?.properties?.keywords?.map((name: string) => <div style={{
                        marginBottom: data.properties.education.length > 1 ? "1rem" : "0"
                    }}>{name}</div>)
                    }
                </TabRow>
            </SearchResultTabs>
            <SearchResultTabs value={value} index={4}>
                <TabRow name="No information found"> </TabRow>
            </SearchResultTabs>
        </Box>
    );
}

export default BasicTabs;