import React from 'react';
import styles from './sideMenu.module.scss';
import Profile from './profile/profile';
import Atribute from './atribute/atribute';


const SideMenu = (props) => {
    let listAtribute = props.atributes.map( atrib => {
        return (
            <Atribute data={atrib} />
        )
    })

    return (
        <div className={styles.sideMenu}>
            <Profile data={props.profile} />
            {listAtribute}
        </div>
    )
}

export default SideMenu;

