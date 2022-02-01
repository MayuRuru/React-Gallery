import styles from "./Picture.module.css";
import Card from "../ui/Card";

function Picture(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.image} />
        </div>

        <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.user}</p>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}

export default Picture;
