import { DialogBox } from "../components/DialogBox";
import { Header } from "../components/Header";

import { Card } from '../components/Card';
import { Notification } from '../components/Notification';
import styles from '../App.module.css';


export function PageAlphabet(){
 const abbreviations = [
  'BBC',
  'CNN',
  'HBO',
  'USA',
  'UK',
  'MTV',
  'DYI',
  'BTS',
  'DJ',
  'YMCA',
 ];

    return(
          <>
      <Header content="Unit 1 - Introduce yourself/ The alphabet in English"/> 
      <Notification/>
        <div className={styles.cards}>
         <div className={styles.containerCards}>
            {abbreviations.map((item, index)=>(
              <Card description={item} key={item+index}/>
            ))}
        </div>
      </div>
      <div className={styles.dialogBox}>
        <DialogBox/>
      </div>
     </>
    )
}