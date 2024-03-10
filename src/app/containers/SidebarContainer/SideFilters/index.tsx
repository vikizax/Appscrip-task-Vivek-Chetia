import Checkbox from '@/components/Checkbox';
import FilterAccordian from '@/components/FilterAccordian';
import styles from './style.module.css'

const SideFilters = () => {
    return <>
        <div className={styles.sidefilters}>
            <div className={styles.padded_b_border_container}>
                <Checkbox name='customizble' />
            </div>

            <div className={styles.padded_b_border_container}>
                <FilterAccordian title='Ideal For' filters={[{ name:'Men' },{ name:'Women' },{ name:'Baby & Kids' }, ]}/>
            </div>
        </div>
    </>
}

export default SideFilters;