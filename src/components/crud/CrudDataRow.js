import React from "react";

const CrudDataRow = ({ item, setDatatoEdit, deleteData }) => {
  //recibe las propiedades de la madre

  let { title, user, id } = item;

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.user}</td>
      <td>
        <button onClick={() => setDatatoEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudDataRow;
