//import Picture from "./Picture";

function PictureList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <div key={item.id}>
          image={item.image}
          title={item.title}
          user={item.user}
          description={item.description}
        </div>
      ))}
    </ul>
  );
}

/*
const PictureList = ({ pictures, onDelete }) => {
  return (
    <>
      {pictures.map((item) => (
        <Picture 
        key={item.id} 
        item={item} 
        onDelete={onDelete} />
        //passing items as props and also delete function
      ))}
    </>
  );
};
*/

export default PictureList;
