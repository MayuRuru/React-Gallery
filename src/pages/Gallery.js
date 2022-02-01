import PictureList from "../components/pics/PictureList";
//import pictures from "../assets/data/db.json";

function Gallery() {
  const initialDb = [
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
  ];

  return (
    <section>
      <PictureList pictures={initialDb} title="Gallery" />
    </section>
  );
}

export default Gallery;
