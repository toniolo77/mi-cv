import React from 'react';
import styles from './title.module.scss';
import {Col,Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = (props) => {
    
    const colorStyle= (props.style=='white') ? styles.white : styles.black;

    return (
        <Row>
            <Col sm={2} className={styles.iconContainer} >
                <FontAwesomeIcon className={[styles.icon,colorStyle].join(' ')} icon={props.icon} />
            </Col>
            <Col sm={10}  className={[styles.title,colorStyle].join(' ')}>
                <span>{props.title}</span>
            </Col>
        </Row>
    )
}

export default Title;