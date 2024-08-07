'use client'
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import Slideshow from '../components/Slideshow';
import landingPageBanner3 from '../../assets/landingPageBanner3.jpg';
import Logo from '../../assets/baidyabooti-logo.png';
import Image from "next/image";
import styles from './basicCss.module.css';
import Girl1 from '../../assets/landingPageBannerGirl1.jpg';
import Girl2 from '../../assets/landingPageBannerGirl2.jpg';
import ImageSlideShow from "@/components/ImageSlideShow";
import landingArea6Banner from '../../assets/landingArea6Banner.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const bannerImages = [
    '/images/landingPageBanner1.jpg',
    '/images/landingPageBanner2.jpg'
  ]

  return (
    <>
      <Typography variant="h3" align="center">
        <Slideshow images={bannerImages} interval={5000} />
        <div className={styles.featuredImageWrapper}>
          <Typography align="center" >
            <Image
              src={landingPageBanner3}
              alt="landingPageBanner3"
              fill
              priority
              className={`$(styles.featuredImage) rounded`}
            />
          </Typography>
        </div>
        {/* <div style={{ display: 'flex', margin:'2rem auto', maxWidth:'1450px' }}> */}
        <div className={styles.area4Container}>
          <div style={{ margin: 'auto', maxWidth: '600px' }}>
            <Image
              src={Logo}
              width={190}
              height={70}
              alt='Picture'
              align='center'
            />
            <Typography align="center" variant="h5" sx={{ color: 'red' }}>
              NATURE IS THE KEY TO ENHANCE BEAUTY
            </Typography>
            <Typography align="center" sx={{ margin: '1rem 2rem' }}>
              Building on a legacy of quality and experience over the years. Baidyabooti operates in key consumer products categories like Hair-Care, Skin-Care, Facial-Kits, Coconut-Oil, Incense-Sticks and many more.
            </Typography>
          </div>
          <div>
            <Grid container>
              <Grid item xs={6}>
                <Item>
                  <Image
                    src={Girl1}
                    // width={280}
                    // height={400}
                    alt='Picture'
                    align='center'
                    style={{ margin: '1rem auto' }}
                    className={styles.image}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Image
                    src={Girl2}
                    // width={280}
                    // height={400}
                    alt='Picture'
                    align='center'
                    style={{ margin: '1rem auto' }}
                    className={styles.image}
                  />
                </Item>
              </Grid>
            </Grid>
          </div>
        </div>
        <ImageSlideShow />
        <div>
          <div className={styles.featuredImageWrapper1}>
            <Typography align="center">
              <Image
                src={landingArea6Banner}
                alt="landingArea6Banner"
                fill
                priority
              />
            </Typography>
          </div>
        </div>
      </Typography>
    </>
  );
}