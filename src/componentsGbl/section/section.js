import React from "react";
import DetailedItem from "./detailedItem/detailedItem";
import Title from "../title/title";
import styles from "./section.module.scss";

const Section = (props) => {
  let listItem = props.list_item.map((item) => (
    <DetailedItem
      key={item.subtitle}
      time={item.time}
      subtitle={item.subtitle}
      description={item.description}
      responsibilities_text={props.responsibilities_text}
      responsibilities={item.responsibilities}
    />
  ));

  return (
    <div className={styles.mainContent}>
      <Title style="black" icon={props.icon} title={props.title}></Title>
      {listItem}
    </div>
  );
};

export default Section;
