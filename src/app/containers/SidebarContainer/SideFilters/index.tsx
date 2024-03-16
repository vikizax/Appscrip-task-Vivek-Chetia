import Checkbox from '@/components/Checkbox';
import FilterAccordian from '@/components/FilterAccordian';
import styles from './style.module.css'
import { useId } from 'react';

const FILTERS = [
    { title: 'Ideal For', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Occasion', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Work', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Fabric', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Segment', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Suitable For', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Raw Materials', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'Pattern', options: ['Men', 'Women', 'Baby & Kids'] }
]

const SideFilters = () => {
    const id = useId()
    return <>
        <div className={styles.sidefilters}>
            <div className={styles.padded_b_border_container}>
                <Checkbox name='customizble' />
            </div>

            {
                FILTERS.map(({ title, options }) => (
                    <div className={styles.padded_b_border_container} key={id}>
                        <FilterAccordian title={title} filters={options.map(option => ({ name: option }))} />
                    </div>)
                )
            }

        </div>
    </>
}

export default SideFilters;