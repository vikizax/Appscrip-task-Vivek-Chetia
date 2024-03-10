import { useId } from 'react';
import styles from './style.module.css'

interface Props {
    name: string
    value?: string;
    mutted?: boolean
}

const Checkbox = ({ name, value, mutted }: Props) => {
    console.log({ mutted })
    const id = useId();
    return <>
        <div className={styles.checkbox}>
            <input type="checkbox" name={name} value={value} id={id} />
            <label htmlFor={id} className={mutted ? styles.mutted : ''}>{name}</label>
        </div>
    </>
}

export default Checkbox;