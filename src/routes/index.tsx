import { Route, Routes } from "react-router-dom";
import Ckeditor from "../component/Ckeditor";
import AdvancedEditor from "../component/AdvancedEditor";
import Home from "../component/Home";

const RoutesController = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Ckeditor />} />
        <Route path="/advanced" element={<AdvancedEditor />} />
      </Routes>
    </>
  );
};

export default RoutesController;
