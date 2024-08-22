import styles from "../src/styles/EntradaNumerica.module.css"

interface EntradaNumericaProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}
export default function EntradaNumerica(props: EntradaNumericaProps){
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)
    return (
        <div>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button onClick={dec} className={styles.btn}>-</button>
                <button onClick={inc} className={styles.btn}>+</button>
            </div>
        </div>
    )
}