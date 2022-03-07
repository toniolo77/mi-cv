import React from 'react';
import {Col,Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './itemProfile.module.scss';

const ItemProfile = (props) => {
    return (
        <Row className={styles.itemRow}>
            <Col  className={styles.icon} sm={2}>
                <FontAwesomeIcon  icon={props.icon} />
            </Col>
            {/* <Col sm={10}  className={[styles.title,colorStyle].join(' ')}> */}
            <Col sm={10} className={styles.itemDescription}>
                <span>{props.description}</span>
            </Col>
        </Row>
    )
}

export default ItemProfile;