

import  styles from'./Header.module.css';
//icons Header
import iconAlert  from '../../assets/icon-alert.svg';
import iconAvatar  from '../../assets/icon-avatar.svg';
import iconMusic  from '../../assets/icon-music.svg';
import iconQuestion  from '../../assets/icon-question.svg';
import iconSound  from '../../assets/icon-sound.svg';


export function  Header(props: { content: string }) {
  return (
        <div className={styles.headerContainer}>
            <div className={styles.headerText}>
                <span> {props.content} </span>
            </div>
            <div className={styles.headerIcons}>
                   <img src={iconMusic} alt="Music" />
                   <img src={iconSound} alt="Sound" />
                   <img src={iconAlert} alt="Alert" />
                   <img src={iconQuestion} alt="Question" />
                   <img src={iconAvatar} alt="Avatar" />
            </div>
        </div>
  )}
