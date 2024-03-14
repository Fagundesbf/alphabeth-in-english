import styles  from "./Notification.module.css";

export function Notification(){ 
    return ( 
        <div className={styles.notificationContainer}>
            <span> Listen and write the names of some famous abbreviations.</span>
        </div>
    )
}