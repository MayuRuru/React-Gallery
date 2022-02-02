import Crud from "../components/crud/CrudForm";
import PictureForm from "../components/pics/PictureForm";

function AddPicture() {
  return (
    <section>
      <h1>Add New Picture:</h1>
      <PictureForm />
      <Crud />
    </section>
  );
}

export default AddPicture;
