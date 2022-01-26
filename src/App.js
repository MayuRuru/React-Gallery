import Navbar from "./components/Navbar";
import PictureList from "./components/PictureList";
import { useState } from "react";
import AddPicture from "./components/AddPicture";

const App = () => {
  const [pictures, setPictures] = useState([
    {
      id: 1,
      title: "Driving",
      user: "Nesa",
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
  ]);

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

  return (
    <div className="container">
      <Navbar />
      <AddPicture onAdd={addPicture} />
      <PictureList pictures={pictures} onDelete={deletePicture} />
    </div>
  );
};

export default App;
