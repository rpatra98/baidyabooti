import { Paper, Typography } from "@mui/material";
import styles from './aboutUsCss.module.css';
import AboutBaidyabooti from '../../../assets/AboutBaidyabooti.jpg';
import AboutBaidyabootiTextLess from '../../../assets/aboutBaidyabootiTextLess.jpg';
import Image from "next/image";
import { Allura } from "next/font/google";
// import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');



export default function aboutUs() {
    return (
        <div className={styles.body}>
            {/* <div className={styles.container}>
                <div className={styles.featuredImageWrapper}>
                    <Typography align="center" >
                        <Image
                            // src={AboutBaidyabooti}
                            src={AboutBaidyabootiTextLess}
                            alt="aboutBaidyabooti"
                            // width={1300}
                            // height={350}
                            fill
                            priority
                            // sizes="(max-width:768px) 60vw, 700px"
                            className={`$(styles.featuredImage) rounded`}
                        />
                    </Typography>
                </div>
            </div> */}
            <Paper elevation={0} align='center' sx={{ position: 'relative', mt: '0%', mx: '11%', background: 'transparent' }} >
                <Typography variant="h2" align="center" sx={{ color: 'purple', mb:'4rem' }}>
                    <div className="allura">
                        Baidyabooti journey so far
                    </div>
                </Typography>
                <Typography align="center" sx={{color:'purple', fontSize:'3ch', lineHeight:'1.8ch'}}>
                    A partnership firm founded in 2008 having its factory at Macheswar Industrial area, Bhubaneswar, Odisha; engaged in business of manufacturing & marketing Ayurvedic medicines, Herbal Cosmetics, different foods & various incense sticks / Agarbattis, named as "Baidyabooti Pharmacy". We are three partners cum friends since last 3 decades, who come together to form a firm with a dedication towards the work to be named in the Global Platform of Ayurvedic & Herbal products.
                </Typography>
                <Typography variant="h2" align="center" sx={{color:'purple'}}>
                    {/* <div className="allura"> */}
                    Our Vision:
                    {/* </div> */}
                </Typography>
                <Typography align="center" sx={{color:'purple', mb:'1ch', fontSize:'3ch', lineHeight:'1.8ch'}}>
                    We always focused to prepare innovative herbal product to complete in the National & International market, which will be essential for beauty and we believe in the power of Nature and plants to heal and take care of out skin and body to make us feel beautiful & happy.
                </Typography>
                <Typography align="center" sx={{color:'purple', mb:'1ch', fontSize:'3ch', lineHeight:'1.8ch'}}>
                    We stand for purity & quality by a bunch of technical & analytical chemists with qualified professional team, who use latest technology & innovations in packaging, sizing, tamper proofing make us ready for the new age market place in urban, semi-urban & rural area.
                </Typography>
            </Paper>
            <div className="styles.background">
            </div>
        </div>
    )
}