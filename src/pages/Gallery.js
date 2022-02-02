import PictureList from "../components/pics/PictureList";
import data from "../assets/data/db.json";
import { useState } from "react";

function Gallery() {
  const [pictures, setPictures] = useState([data]);

  /*
  const initialDb = [
    {
      id: 1,
      title: "Driving",
      user: "Nesa",
      image: "foto1.jpg",
      description: "description",
    },
    {
      id: 2,
      title: "X-mas",
      user: "Klaus",
      image: "foto2.jpg",
      description: "description",
    },
  ];
  */

  return (
    <section>
      <PictureList pictures={pictures} title="Gallery" />
    </section>
  );
}

export default Gallery;
