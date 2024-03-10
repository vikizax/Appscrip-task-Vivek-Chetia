import Image from 'next/image';
import Select from '@/components/Select';
import LeftArrow from '@/assets/left-arrow.svg'
import styles from './style.module.css'

const Topbar = () => {
    return <>
        <div className={styles.topbar_container}>
            <div className={styles.topbar_left}>
                <div className={styles.topbar_item_count}>
                    3425 Items
                </div>

                <button type='button'>
                    <Image src={LeftArrow} alt='left-arrow' />
                    HIDE FILTER
                </button>
            </div>

            <div className={styles.topbar_right}>
                <Select name='recommended' title='Recommended Items' options={[{ title: 'RECOMMENDED', value: '' }]} disabled />
            </div>

        </div>
    </>
}

export default Topbar;