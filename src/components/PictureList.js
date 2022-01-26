import Picture from "./Picture";

const PictureList = ({ pictures, onDelete }) => {
  return (
    <>
      {pictures.map((item) => (
        <Picture key={item.id} item={item} onDelete={onDelete} />
        //passing items as props and also delete func
      ))}
    </>
  );
};

export default PictureList;
