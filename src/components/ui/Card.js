import styles from "./Card.module.css";

function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}

//this is a component we can put around other components this is why we pass props.children to render content inside

export default Card;
