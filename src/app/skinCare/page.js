'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import styles from './skincare.module.css';
import SkinCareProduct from './SkinCareProduct';

export default function NestedList() {
    const [openFaceCare, setOpenFaceCare] = useState(false);
    const [openBodyCare, setOpenBodyCare] = useState(false);

    const handleFaceCareClick = () => {
        setOpenFaceCare(!openFaceCare);
    };
    const handleBodyCareClick = () => {
        setOpenBodyCare(!openBodyCare);
    }

    return (
        <>
            <div className={styles.parent}>
                <div className={styles.child1}>
                    <List
                        sx={{ bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleFaceCareClick}>
                            <ListItemText primary="Face Care" />
                            {openFaceCare ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openFaceCare} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Face Washes" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Face Cleansers" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Skin Toners" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Moisturisers" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Day Cream" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Night Cream" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Massage Cream" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Massage Gels" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Face Serums" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Facial Scrubs & Masks" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleBodyCareClick}>
                            <ListItemText primary="Body Care" />
                            {openBodyCare ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openBodyCare} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Body Lotions" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Body Oils" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Body Washes" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 6 }}>
                                    <ListItemText primary="Body Scrub-Gels" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton>
                            <ListItemText primary="Sun Care" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Lightening" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="D-Tan" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Anti Ageing" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Pimple & Pigmentation Care" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Winter Care" />
                        </ListItemButton>
                    </List>
                </div>


                <div className={styles.child2}>
                    <SkinCareProduct/>
                </div>
            </div>
        </>
    );
}