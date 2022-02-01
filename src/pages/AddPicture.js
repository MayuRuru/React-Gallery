import { useState } from "react";

//function AddPicture(){}

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

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Image</label>
        <input
          type="url"
          placeholder="Add url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div>
        <label>User</label>
        <input
          type="text"
          placeholder="Taken by"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Picture" />
    </form>
  );
};

export default AddPicture;
