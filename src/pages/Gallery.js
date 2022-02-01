import PictureList from "../components/pics/PictureList";
//import { useState } from "react";
//const [pictures, setPictures] = useState([initialDb]);

function Gallery() {
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

  return (
    <section>
      <PictureList pictures={initialDb} title="Gallery" />
    </section>
  );
}

export default Gallery;
