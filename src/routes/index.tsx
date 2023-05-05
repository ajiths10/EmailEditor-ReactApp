import { Route, Routes } from "react-router-dom";
import Ckeditor from "../component/Ckeditor";
import AdvancedEditor from "../component/AdvancedEditor";
import Home from "../component/Home";

const RoutesController = () => {
  return (
    <>
      <Routes>
        <Route path="/ck" element={<Ckeditor />} />
        <Route path="/advanced" element={<AdvancedEditor />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RoutesController;
