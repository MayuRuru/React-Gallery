import CrudDataRow from "./CrudDataRow";

const CrudData = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>DataBase</h3>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.lenght === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudDataRow
                key={el.id}
                el={el}
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
