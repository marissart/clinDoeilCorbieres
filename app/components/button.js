import styles from './styles/button.module.css'


export default function Button(props) {

    return (
        <button className={styles.button}> {props.text}</button>
    )
}
