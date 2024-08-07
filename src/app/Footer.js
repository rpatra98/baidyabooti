'use client'
import { AppBar, Container, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
// import './globals.css';
import styles from './basicCss.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function Footer() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const originalTheme = createTheme({
        palette: {
            primary: {
                main: '#c3e8bd'
            }
        },
    })

    return (
        <div className={styles.footer}>
            <ThemeProvider theme={originalTheme}>
                <AppBar position="static" elevation={24} sx={{ minHeight: '15vh' }}>
                    {/* <Container maxWidth='lg' sx={{display: 'flex', alignItems:'center'}}> */}




                    {/* <Grid container spacing={2} columns={16}>
                        <Grid item xs={8} sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography variant="h6" sx={{background:'blue', margin:'auto'}}>
                                <Link href='/contactUs' style={{ textDecoration: 'none', color: '#375643' }}>
                                    CONTACT US
                                </Link>
                            </Typography>
                            <Typography variant="h6" sx={{background:'yellow', margin:'auto'}}>
                                <Link href='/aboutUs' style={{ textDecoration: 'none', color: '#375643' }}>
                                    ABOUT US
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                        </Grid>
                    </Grid> */}
                    <div style={{ display: isSmallScreen ? 'none' : 'flex', maxWidth: '1450px', margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'auto', marginTop: '-0.5ch', marginRight: '20vh' }}>
                            <div>
                                <Typography variant="h6">
                                    <Link href='/contactUs' style={{ textDecoration: 'none', color: '#000' }}>
                                        Contact Us
                                    </Link>
                                </Typography>
                                <Typography variant="h6">
                                    <Link href='/aboutUs' style={{ textDecoration: 'none', color: '#000' }}>
                                        About Us
                                    </Link>
                                </Typography>
                            </div>
                            <div className={styles.footerComp}>
                                <Typography variant="h6" >
                                    <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                        Store Locator
                                    </Link>
                                </Typography>
                                <Typography variant="h6" >
                                    <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                        FAQs
                                    </Link>
                                </Typography>
                            </div>
                            <div className={styles.footerComp}>
                                <Typography variant="h6" >
                                    <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                        Terms & Conditions
                                    </Link>
                                </Typography>
                                <Typography variant="h6" >
                                    <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                        Privacy Policy
                                    </Link>
                                </Typography>
                            </div>
                            <Typography variant="h6" className={styles.footerComp}>
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    Career
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto', marginTop: '1.8vh', marginLeft: '2vw' }}>
                            <div style={{ marginRight: '2ch', marginTop: '-0.5ch' }}>
                                <Typography variant="h6">Follow us on </Typography>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Link href='https://www.facebook.com/baidyabooti/' target="_blank" style={{ marginRight: '1ch' }}>
                                    <FacebookIcon sx={{ color: '#1877F2' }} />
                                </Link>
                                <Link href='https://www.youtube.com/channel/UCvNlfjTy9SqFb_IIQOEynVw' target="_blank">
                                    <YouTubeIcon sx={{ color: '#FF0000' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: isSmallScreen ? 'flex' : 'none', flexDirection: 'column' }}>
                        {/*<div style={{ alignItems: 'center', margin: 'auto' }}>
                             <div style={{ display: 'flex', justifyContent: 'space-between', gap: '60px', marginTop: '3vh' }}>
                                <div>
                                    <Typography variant="h6">
                                        <Link href='/contactUs' style={{ textDecoration: 'none', color: '#000' }}>
                                            Contact Us
                                        </Link>
                                    </Typography>
                                    <Typography variant="h6" >
                                        <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                            Store Locator
                                        </Link>
                                    </Typography>
                                    <Typography variant="h6" >
                                        <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                            Privacy Policy
                                        </Link>
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6">
                                        <Link href='/aboutUs' style={{ textDecoration: 'none', color: '#000' }}>
                                            About Us
                                        </Link>
                                    </Typography>
                                    <Typography variant="h6" >
                                        <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                            FAQs
                                        </Link>
                                    </Typography>
                                    <Typography variant="h6">
                                        <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                            Career
                                        </Link>
                                    </Typography>
                                </div>
                            </div>
                        </div> */}
                        <div style={{ margin: '0 auto', marginTop:'3vh' }}>
                            <Typography variant="h6">
                                <Link href='/contactUs' style={{ textDecoration: 'none', color: '#000' }}>
                                    Contact Us
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6">
                                <Link href='/aboutUs' style={{ textDecoration: 'none', color: '#000' }}>
                                    About Us
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6" >
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    FAQs
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6" >
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    Store Locator
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6">
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    Career
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6" >
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    Privacy Policy
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <Typography variant="h6" >
                                <Link href='/' style={{ textDecoration: 'none', color: '#000' }}>
                                    Terms & Conditions
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', margin: 'auto', marginBottom: '3vh', marginTop: '2vh' }}>
                            <div style={{ marginRight: '2ch', marginTop: '-0.5ch' }}>
                                <Typography variant="h5">Follow us on </Typography>
                            </div>

                            <Link href='https://www.facebook.com/baidyabooti/' target="_blank" style={{ marginRight: '1ch' }}>
                                <FacebookIcon sx={{ color: '#1877F2' }} />
                            </Link>

                            <Link href='https://www.youtube.com/channel/UCvNlfjTy9SqFb_IIQOEynVw' target="_blank">
                                <YouTubeIcon sx={{ color: '#FF0000' }} />
                            </Link>
                        </div>
                    </div>











                    {/* </Container> */}
                </AppBar>
            </ThemeProvider>
        </div>
    )
}