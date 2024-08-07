'use client'
import { Typography } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function aboutUs() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, maxWidth:'1450px', margin:'0 auto', minWidth:'1450px' }}
            >
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Dandruff Control" {...a11yProps(0)} />
                <Tab label="Dry & Damaged Control" {...a11yProps(1)} />
                <Tab label="Hair Fall Control" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Dandruff Control
            </TabPanel>
            <TabPanel value={value} index={1}>
                Dry & Damaged Control
            </TabPanel>
            <TabPanel value={value} index={2}>
                Hair Fall Control
            </TabPanel>
            </Box>
        </>
    )
}