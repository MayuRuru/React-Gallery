import styles from "./Picture.module.css";

function Picture(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} />
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

/*
const Picture = ({ item, onDelete }) => {
  return (
    <div>
      <h3>
        {item.title} <FaTimes onClick={() => onDelete(item.id)} />
      </h3>
      <p>{item.user}</p>
      <p>{item.description}</p>
    </div>
  );
};
*/

export default Picture;
