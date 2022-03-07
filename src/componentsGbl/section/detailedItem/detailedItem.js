import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./detailedItem.module.scss";

const DetailedItem = (props) => {
  return (
    <Row className={styles.rowDescription}>
      <Col sm={2} className={styles.time}>
        <span>{props.time}</span>
      </Col>
      <Col sm={10}>
        <div className={styles.subtitle}> {props.subtitle} </div>
        <p className={styles.description}>{props.description}</p>
        {props.responsibilities && !!props.responsibilities?.length && (
          <>
            <div className={styles.responsibilityTitle}> {props.responsibilities_text} </div>
            <ul className={styles.responsibilities}>
              {props.responsibilities?.map((responsibility) => (
                <li> {responsibility} </li>
              ))}
            </ul>
          </>
        )}
      </Col>
    </Row>
  );
};

export default DetailedItem;
