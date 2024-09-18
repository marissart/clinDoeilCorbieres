import styles from '../styles/cardHomeChoice.module.css'

export default function CardHomeChoice(props) {


    return (
        <div className={styles.container} style={{ backgroundImage: `url("${props.url}")` }}>
                <p className={styles.title}>{props.title.toUpperCase()}</p>
                <p className={styles.desc}>{props.desc}</p>
                <div className={styles.glassmorph}/>
            
        </div>
    )
}