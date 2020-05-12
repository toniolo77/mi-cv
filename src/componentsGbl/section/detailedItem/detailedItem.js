import React from 'react';
import {Col,Row} from 'react-bootstrap';
import styles from './detailedItem.module.scss';

const DetailedItem = (props) => {
    return (
        <Row className={styles.rowDescription}>
            <Col sm={2} className={styles.time}>
                <span>{props.time}</span>
            </Col>
            <Col sm={10} >
                <div className={styles.subtitle}> {props.subtitle} </div>
                <p className={styles.description}> 
                    {props.description}
                </p>
            </Col>
        </Row>
    );
}

export default DetailedItem;
