import React from "react";

const CrudDataRow = ({ el, setDatatoEdit, deleteData }) => {
  //recibe las propiedades de la madre

  let { title, date, id } = el;

  return (
    <tr>
      <td>{el.title}</td>
      <td>{el.date}</td>
      <td>
        <button onClick={() => setDatatoEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudDataRow;
