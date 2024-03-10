import styles from './style.module.css'
const Tabs = () => {
    return <>
        <div className={styles.tabs}>
            <a href="#shop">Shop</a>
            <a href="#skills">Skills</a>
            <a href="#stories">Stories</a>
            <a href="#about">About</a>
            <a href="#contact-us">Contact Us</a>
        </div>
    </>
}

export default Tabs;