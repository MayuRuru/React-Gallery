//import { useState } from "react";
import styles from "./PictureForm.module.css";
import Card from "../ui/Card";

function PictureForm() {
  /*
const AddPicture = ({ onAdd }) => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, image, user, description });

    setTitle("");
    setImage("");
    setUser("");
    setDescription("");
  };
  */

  return (
    <Card>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="user">User</label>
          <label>Image</label>
          <input
            type="url"
            placeholder="Add url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="user">User</label>
          <input
            type="text"
            placeholder="Taken by"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button>Add picture!</button>
          <input type="submit" value="Save Picture" />
        </div>
      </form>
    </Card>
  );
}

export default PictureForm;
