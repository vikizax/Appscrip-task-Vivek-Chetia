import Image from 'next/image'
import styles from './style.module.css'
import BannerImg from '@/assets/banner-logo.svg'

const ImgAndText = () => <div className={styles.img_text}> <Image priority src={BannerImg} alt='banner-img' />  Lorem ipsum dolor</div>

const Banner = () => {
    return <>
        <div className={styles.banner}>
            <ImgAndText />
            <ImgAndText />
            <ImgAndText />
        </div>
    </>
}

export default Banner