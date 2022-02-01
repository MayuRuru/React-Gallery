import PictureList from "../components/PictureList";
import { useState } from "react";

const initialDb = [
  {
    id: 1,
    title: "Driving",
    use: "Nesa",
    image: "src/assets/img/foto1.jpg",
    description: "description",
  },
  {
    id: 2,
    title: "X-mas",
    user: "Klaus",
    image: "src/assets/img/foto2.jpg",
    description: "description",
  },
];

const Gallery = () => {
  const [pictures, setPictures] = useState([initialDb]);

  /*
  //add pic:

  const addPicture = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPicture = { id, ...item };
    setPictures([...pictures, newPicture]);
  };

  //delete pic:

  const deletePicture = (id) => {
    setPictures(pictures.filter((item) => item.id !== id));
  };

  onDelete={deletePicture} 
  */

  return (
    <div>
      <PictureList pictures={pictures} title="Gallery" />
    </div>
    /*
    <>
      <PictureList pictures={pictures} />
    </>
    */
  );
};

/*

const Gallery = () => {
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
};

*/
export default Gallery;
