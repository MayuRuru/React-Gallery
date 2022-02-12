import React from "react";
import data from "../../assets/data/db.json";

const CrudDataRow = ({ item, setDatatoEdit, deleteData }) => {
  //recibe las propiedades de la madre

  let { title, user, id } = item;

  return (
    <tr>
      <td>{title}</td>
      <td>{user}</td>
      <td>
        <button onClick={() => setDatatoEdit(item)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudDataRow;
