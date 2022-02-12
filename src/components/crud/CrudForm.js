import { useState, useEffect } from "react";
import styles from "./CrudForm.module.css";
import Card from "../ui/Card";

const initialForm = {
  id: null,
  title: "",
  image: "",
  user: "",
  description: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDatatoEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  //clase 22 de formularios!
  //funcion que maneja el cambio de la variable vacia de form con el target del evento:
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //funcion para que no haga nada hasta que cargue, es como una validacion:
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title || !form.user || !form.image || !form.description) {
      alert("Incomplete data");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (event) => {
    setForm(initialForm);
    setDatatoEdit(null);
  };

  return (
    <Card>
      <div>
        <h3>{dataToEdit ? "Edit" : "Add"}</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add title"
              value={form.title}
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className={styles.control}>
            <label htmlFor="image">Image</label>
            <input
              type="url"
              placeholder="Add url"
              value={form.image}
              name="image"
              onChange={handleChange}
            />
          </div>

          <div className={styles.control}>
            <label htmlFor="user">User</label>
            <input
              type="text"
              placeholder="Taken by"
              value={form.user}
              name="user"
              onChange={handleChange}
            />
          </div>

          <div className={styles.control}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Description"
              value={form.description}
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className={styles.actions}>
            <button onClick={handleSubmit}>Add!</button>
            <button onClick={handleReset}>Reset!</button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CrudForm;
