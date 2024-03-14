import styles from './DialogBox.module.css';

import iconPlay from '../../assets/play.svg';
import iconPlayCircle from '../../assets/play-circle.svg';
import iconCheck from '../../assets/check.svg';

export function DialogBox(){
    return (
        <div className={styles.dialogContainer}>
            <ul>
                <li className={styles.borderUl}> 
                    <div>
                     <span>CHECK</span>
                    </div>
                    <div>
                        <img src={iconCheck} alt="Music" />
                    </div>
                 </li>
                <li  className={styles.borderUl}>
                     <div>
                        <span> NEXT </span>
                     </div>
                     <div> 
                        <img src={iconPlay} alt="Music" />
                     </div>
                </li>
                <li>
                     <div>
                        <span>TRY AGAIN </span>
                     </div>
                     <div>
                        <img src={iconPlayCircle} alt="Music" />
                     </div>
                </li>
            </ul>
        
        </div>

    )
}