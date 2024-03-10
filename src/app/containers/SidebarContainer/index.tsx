import Topbar from './Topbar';
import SideFilters from './SideFilters';
import styles from './style.module.css'
interface Props {
    children: JSX.Element;
}

const SidebarContainer = ({ children }: Props) => {
    return <>
        <div className={styles.sidebar_container}>
            <Topbar />

            <div className={styles.sidebar_content}>
                <div className={styles.left}>
                    <SideFilters />
                </div>
                <div className={styles.right}>world</div>
            </div>

        </div>
    </>
}

export default SidebarContainer;