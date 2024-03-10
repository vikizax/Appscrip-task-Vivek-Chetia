import styles from './style.module.css'

type Options = {
    value: string;
    title: string;
}

interface Props {
    name: string;
    title: string;
    options: Options[]
    disabled?: boolean
}

const Select = ({ name, options, title, disabled }: Props) => {
    return (
        <select className={styles.select} name={name} title={title} style={{
            pointerEvents: disabled ? 'none': 'auto'
        }}>
            {
                options.map(
                    ({ title, value }, idx) => <option key={`${title}-${value}-${idx}`} value={value} selected>{title}</option>
                )
            }
        </select>
    )
}

export default Select;