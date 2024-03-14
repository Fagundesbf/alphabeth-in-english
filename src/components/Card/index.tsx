
import styles from "./Card.module.css";
import icon from '../../assets/icon-brown.svg';

export function Card(props: { description: string }){
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardIcon}> 
            <img src={icon} alt="icon" />
            </div>
            <div className={styles.cardBox}>
                <div  className={styles.cardDescription}>
                    <span> {props.description} </span>
                </div>
            </div>
        </div>
    )
}