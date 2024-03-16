import Image from 'next/image';
import Checkbox from '../Checkbox';
import DownArrow from '@/assets/down-arrow.svg'
import styles from './style.module.css'

type Filters = {
    name: string;
    value?: string;
}

interface Props {
    title: string;
    filters: Filters[]
}

const FilterAccordian = ({ title, filters }: Props) => {
    return <>
        <div className={styles.filter_accord_container}>
            <details>
                <summary className={styles.summary}>
                    <div className={styles.left}>
                        <span>{title}</span>
                        <span>All</span>
                    </div>
                    <div className={styles.right}>
                        <Image src={DownArrow} alt='accordian-down-arrow'/>
                    </div>
                </summary>

                <button className={styles.unselect_all_btn}>Unselect All</button>

                {
                    filters.map(params => <Checkbox {...params} mutted />)
                }
            </details>
        </div>
    </>
}

export default FilterAccordian;