import styles from './imageSlideShow.module.css'
import slideGirl1 from '../../assets/slideGirl1.jpg';
import slideGirl2 from '../../assets/slideGirl2.jpg';
import slideGirl3 from '../../assets/slideGirl3.jpg';
import slideGirl4 from '../../assets/slideGirl4.jpg';
import slideGirl5 from '../../assets/slideGirl5.jpg';
import slideGirl6 from '../../assets/slideGirl6.jpg';
import Image from 'next/image';

export default function ImageSlideShow() {
    return (
        <>
            <div style={{margin:'2rem 0'}} className={styles.background}>
                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl1}
                                alt='slideGirl1'
                                height={529}
                                width={346}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl2}
                                alt='slideGirl2'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl3}
                                alt='slideGirl3'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl4}
                                alt='slideGirl4'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl5}
                                alt='slideGirl5'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl6}
                                alt='slideGirl6'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl1}
                                alt='slideGirl1'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl2}
                                alt='slideGirl2'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl3}
                                alt='slideGirl3'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl4}
                                alt='slideGirl4'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl5}
                                alt='slideGirl5'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={slideGirl6}
                                alt='slideGirl6'
                                // height={500}
                                // width={350}
                                // layout='fill'
                                // objectFit='contain'
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}