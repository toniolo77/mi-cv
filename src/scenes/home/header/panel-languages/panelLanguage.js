import React from 'react';
import styles from './panelLanguage.module.scss';
import Argentine from './../../../../assets/argentine.png'
import UK from './../../../../assets/united-kingdom.png'

const PanelLanguage = (props) => {
    return (
        <div className={styles.language}>
            <button onClick={props.changeLanguage.bind(this,"spanish")} className="active">
                <img  src={ Argentine } />
            </button>
            <button onClick={props.changeLanguage.bind(this,"uk")}>
                <img src={ UK } />
            </button>
        </div>
    )
}


export default PanelLanguage;