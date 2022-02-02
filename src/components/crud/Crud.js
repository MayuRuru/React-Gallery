import PictureList from "../pics/PictureList";
import CrudData from "./CrudData";
import CrudForm from "./CrudForm";

const Crud = () => {
  const [db, setDB] = useState(PictureList);
  const [dataToEdit, setDatatoEdit] = useState(null); //permite o bien crear o bien editar

  const createData = (data) => {
    data.id = Date.now(); //estampa del segundo en el que ejecutamos como si fuera un id
    setDB([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDB(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete this:'${id}'?`);
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDB(newData);
    } else {
      return;
    }
  };

  //las funciones anteriores se ejecuten en las hjas:
  //CrudForm y Crud data reciben las props de la madre:

  return (
    <div>
      <h2>Crud</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDatatoEdit={setDatatoEdit}
      />
      <CrudData
        data={db}
        setDatatoEdit={setDatatoEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Crud;
