import Picture from "./Picture";
import styles from "./PictureList.module.css";

function PictureList(props) {
  return (
    <ul className={styles.list}>
      {props.pictures.map((item) => (
        <Picture
          key={item.id}
          item={item}
          image={item.image}
          title={item.title}
          user={item.user}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default PictureList;
