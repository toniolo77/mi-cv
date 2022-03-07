import React from 'react';
import Perfil from '../../../assets/perfil.jpg';
import styles from './header.module.scss';
import PanelLanguage from './panel-languages/panelLanguage';

const header = (props) => {
    return (
        <div className={styles.header}>
            <PanelLanguage changeLanguage={props.changeLanguage}/>
            <div className={styles.perfilContainer}>
                <img src={Perfil}/>
            </div>
            <div className={styles.name}>
                <h1 className={styles.title}>Franco Toniolo</h1>
                <h2 className={styles.subtitle}>FullStack Developer</h2>
            </div>
        </div>
    );
}

export default header;