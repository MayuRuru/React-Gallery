import { useState } from "react";
import styles from "./PictureForm.module.css";
import Card from "../ui/Card";

function PictureForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(event) {
    event.preventDefault(); //method to PREVENT the browser default reaction from sending a HTTP request and reload the page

    const newData = { title, image, user, description };
    //new object to react to the submit

    fetch("http://localhost:8000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
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
          <label htmlFor="image">Image</label>
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
        </div>
      </form>
    </Card>
  );
}

export default PictureForm;
