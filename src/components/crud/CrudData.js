import CrudDataRow from "./CrudDataRow";
import { fakeApi } from "../../assets/data/fakeapi";
import { useState, useEffect } from "react";

//{ data, setDataToEdit, deleteData }

const CrudData = ({ setDataToEdit, deleteData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeApi());
  });

  return (
    <div>
      <h3>DataBase</h3>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>image</th>
            <th>user</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.lenght === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          ) : (
            data.map((item) => (
              <CrudDataRow
                key={item.id}
                item={item}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
            //props cada elemento que renderiza la tabla
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudData;
