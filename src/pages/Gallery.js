import PictureList from "../components/pics/PictureList";
import { useState, useEffect } from "react";

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPics, setLoadedPics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedPics(data);
      });
  }, []);

  /*there is no external dependencies here 
except for Loading and setLoaded that are exceptions
so the code will only run once and we do not have a infinite loop
*/

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

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
      <PictureList pictures={loadedPics} title="Gallery" />
    </section>
  );
}

export default Gallery;
