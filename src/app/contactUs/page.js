'use client'
import { Box, FormControl, Grid, Select, InputLabel, OutlinedInput, Paper, TextField, Typography, MenuItem, Button } from "@mui/material";
import ContactBanner from '../../../assets/banner-contact.jpg';
import Image from "next/image";
import styles from './contactUsCss.module.css';
import { useState } from "react";
import { Map } from './map.js';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// const FormData = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [error, setError] = useState(false);

//     const handleChange = (e) => {
//         const {value} = e.target;
//         if(/^\d{0, 10}$/.test(value)) { // Regex to allow only up to 10 digits
//             setPhoneNumber(value);
//             setError(value.length !== 10); // Set error if the length is not 10
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (phoneNumber.length === 10) {
//             console.log("Phone number submitted:", phoneNumber);
//             // Handle form submission logic here
//         } else {
//             setError(true);
//         }
//     }
// };

export default function ContactUs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <div className={styles.featuredImageWrapper}>
                <Typography align="center">
                    <Image
                        src={ContactBanner}
                        alt="contact banner"
                        // width={1300}
                        // height={350}
                        fill
                        priority
                        // sizes="(max-width:768px) 60vw, 700px"
                        className={`$(styles.featuredImage) rounded`}
                    />
                </Typography>
            </div>
            <div className={styles.formNMap} style={{display:isSmallScreen?'block':'flex', justifyContent:'center', alignItems:'center', padding:'2rem'}}>
                <div style={{width:isSmallScreen?'86%':'50%', marginLeft:'3rem'}}>
                    <Box component='form' sx={{ mt: 3, width: '80%' }}>
                    <div style={{ display:isSmallScreen?'block':'flex' }}>
                        <Typography sx={{ mt: 0.8, mr: 0.5 }}>
                            Write to us at
                        </Typography>
                        <Typography variant="h5">
                            info@baidyabooti.com
                        </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography sx={{ mt: 0.8, mr: 0.5 }}>
                            Call us at
                        </Typography>
                        <Typography variant="h5">
                            0674-2579977
                        </Typography>
                    </div>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id='name'
                        label='Name'
                        autoComplete="name"
                        autoFocus
                        sx={{ width: '100%' }}
                        helperText='Maximum number of characters: 50'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="phone"
                        sx={{ mt: -0.1 }}
                    // helperText={error ? "Phone number must be 10 digits long" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label='Email Address'
                        name="email"
                        autoComplete="email"
                        sx={{ mt: 0.8 }}
                    />
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <InputLabel id='queryType-label'>Type of Query</InputLabel>
                        <Select
                            required
                            labelId="queryType-label"
                            id="queryType"
                            label="queryType"
                        >
                            {/* <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem> */}
                            <MenuItem>General / Product Enquiry</MenuItem>
                            <MenuItem>Export Enquiry</MenuItem>
                            <MenuItem>Institutional Enquiry</MenuItem>
                            <MenuItem>Order / Payment / Logistics Enquiry</MenuItem>
                            <MenuItem>Dealer / Distribution Enquiry</MenuItem>
                            <MenuItem>Product Complaint / Replacement</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        type="text"
                        id='message'
                        autoComplete="message"
                        multiline
                        rows={4}
                        helperText='Maximum number of characters: 300'
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="contained">Submit</Button>
                    </div>
                    </Box>
                </div>

                
                <div style={{width:isSmallScreen?'88%':'50%', backgroundColor:'yellowgreen'}}>
                    <Map />
                </div>

            </div>
            {/* <Grid container spacing={2} sx={{ maxWidth: '1500px', align: 'center', margin: 'auto' }}>
                <Grid item xs={6} sx={{display:isSmallScreen?'flex':'block'}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 2,
                            mb: 2
                        }}
                    >
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: 'greenyellow' }}>
                    <Map />
                </Grid>
            </Grid> */}
        </>
    )
}