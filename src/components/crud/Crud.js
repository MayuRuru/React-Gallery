import { useState, useEffect } from "react";
//import { helpHttp } from "../../helpers/helpHttp";
import CrudData from "./CrudData";
import CrudForm from "./CrudForm";
//import data from "../../assets/data/db.json";
import { fakeApi } from "../../assets/data/fakeapi";

const Crud = () => {
  const [db, setDB] = useState([]); //AQUI QUE LE PONGO??????!!!!!!!!
  const [dataToEdit, setDatatoEdit] = useState(null); //permite o bien crear o bien editar

  /*
  let api = helpHttp();
  let endpoint = " http://localhost:8000/items";

  useEffect(() => {
    api.get(endpoint).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDB(res);
      } else {
        setDB(null);
      }
    });
  }, [...db]);
  */

  const createData = (data) => {
    data.id = Date.now(); //estampa del segundo en el que ejecutamos como si fuera un id
    setDB([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((item) => (item.id === data.id ? data : item));
    setDB(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete this:'${id}'?`);
    if (isDelete) {
      let newData = db.filter((item) => item.id !== id);
      setDB(newData);
    } else {
      return;
    }
  };

  //las funciones anteriores se ejecuten en las hjas:
  //CrudForm y CrudData reciben las props de la madre:

  return (
    <div>
      <h2>Crud</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDatatoEdit={setDatatoEdit}
      />

      <h3>DataBase:</h3>
      <CrudData
        data={db}
        setDatatoEdit={setDatatoEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Crud;
