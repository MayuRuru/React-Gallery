import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Gallery from "./pages/Gallery";
import AddPicture from "./pages/AddPicture";
import Crud from "./pages/Crud";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Gallery />} />
        <Route path="/new" element={<AddPicture />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </Layout>
  );
}

export default App;
