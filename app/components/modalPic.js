import styles from '../styles/modalPic.module.css'

import { ArrowForwardIos } from '@material-ui/icons'
export default function ModalPic(props) {


  return (
    <div className={styles.modalOverlay} >
       <div className={`${styles.arrowDivLeft} ${styles.arrowDiv}`} onClick={props.back}>
        <ArrowForwardIos className={`${styles.icon} ${styles.iconBack}`} />
        <ArrowForwardIos className={`${styles.icon} ${styles.iconBack}`} style={{ marginLeft: '-10px' }} />

        <ArrowForwardIos className={`${styles.icon} ${styles.iconFront}`} />
        <ArrowForwardIos className={`${styles.icon} ${styles.iconFront}`} style={{ marginLeft: '-10px' }} />
      </div>
      <div className={styles.modal}>
        <span className={styles.close} onClick={props.closeModal}>&times;</span>
        <img src={props.imageSrc} alt={props.alt} className={styles.image} />
      </div>
      <div className={`${styles.arrowDivRight} ${styles.arrowDiv}`} onClick={props.forward}>
        <ArrowForwardIos className={`${styles.icon} ${styles.iconBack}`} />
        <ArrowForwardIos className={`${styles.icon} ${styles.iconBack}`} style={{ marginLeft: '-10px' }} />

        <ArrowForwardIos className={`${styles.icon} ${styles.iconFront}`} />
        <ArrowForwardIos className={`${styles.icon} ${styles.iconFront}`} style={{ marginLeft: '-10px' }} />
      </div>
    </div>
  )
}