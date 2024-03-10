import Image from "next/image";
import Banner from "../banner";
import Select from "@/components/Select";
import Tabs from "../tabs";
import styles from './style.module.css';
import Logo from '@/assets/nav-logo.svg';
import SearchIcon from '@/assets/search-icon.svg';
import HeartIcon from '@/assets/heart-icon.svg';
import BagIcon from '@/assets/bag-icon.svg';
import UserIcon from '@/assets/user-icon.svg';


const Navbar = () => {
    return <>
        <nav className={styles.nav}>
            <div className="top">
                <Banner />
            </div>

            <div className={styles.main}>
                <Image alt="logo" src={Logo} priority />

                <span>LOGO</span>

                <div className={styles.action_container}>
                    <>
                        <button type="button">
                            <Image alt="search-icon" src={SearchIcon} priority />
                        </button>
                        <button type="button">
                            <Image alt="heart-icon" src={HeartIcon} priority />
                        </button>
                        <button type="button">
                            <Image alt="bag-icon" src={BagIcon} priority />
                        </button>
                        <button type="button">
                            <Image alt="user-icon" src={UserIcon} priority />
                        </button>
                    </>

                    <Select name="language" title="Language Selector" options={[{ title: 'ENG', value: 'eng' }]} disabled />

                </div>


            </div>

            <div className={styles.bottom}>
                <Tabs />
            </div>
        </nav>
    </>
}

export default Navbar;