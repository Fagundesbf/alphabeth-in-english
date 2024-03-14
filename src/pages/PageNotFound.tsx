import { Link } from 'react-router-dom';

import { Header } from "../components/Header";
import styles from "../App.module.css"

import Icon from "../assets/icon-alert.svg";


export function PageNotFound(){
    return(
        <>
            <Header content="Welcome, Alphabeth!"/> 
            <div className={styles.containerNotFound}>
                <div className={styles.boxNotFound}>
                     <div>
                        <img src={Icon} alt="" />
                     </div>
                     <div>
                         <h1>Error, Page not found!!</h1>
                     </div>
                     <div>
                        <Link to="/alphabet">
                            <button >Go Alphabeth?</button>
                        </Link>
                     </div>
                </div>
            </div>
        </>
    )
}