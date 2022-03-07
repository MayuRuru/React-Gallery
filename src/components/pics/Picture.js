import styles from "./Picture.module.css";
import Card from "../ui/Card";

//src={require(`../../assets/img/${props.image}`)}

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

//<button onClick={handleClick}>delete</button>

/*
 const { data: item } = fetch("http://localhost:8000/items" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/items" + item.id, {
      method: "DELETE",
    });
  };

*/

export default Picture;
