import React from 'react';
import Title from '../../../../componentsGbl/title/title';
import ItemAtribute from './item-atribute/itemAtribute';
import styles from './atribute.module.scss';

const Atribute = (props) => {
    const listAtribute = props.data.content.map(item => {
        return (
            <ItemAtribute
                description={item.description}
            />

        )
    })
    
    return (
        <div className={styles.containerAtribute}>
            <Title title={props.data.title} icon={props.data.icon} style="white"></Title>
            <ul className={styles.itemList}>
                { listAtribute }
            </ul>
        </div>
    )
}

export default Atribute