import PictureList from "../components/pics/PictureList";
import { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPics, setLoadedPics] = useState([]);

  /*
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch("http://localhost:8000/items")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setLoadedPics(data);
        });
    }, 1000);
  }, []);
*/

  useEffect(() => {
    setIsLoading(false);
    axios.get("http://localhost:8000/items").then((response) => {
      setLoadedPics(response.data);
    });
  }, [setIsLoading]);

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
  return (
    <section>
      <PictureList pictures={loadedPics} title="Gallery" />
    </section>
  );
}

export default Gallery;
