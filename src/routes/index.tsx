import { Route, Routes } from "react-router-dom";
import Ckeditor from "../component/Ckeditor";
import AdvancedEditor from "../component/AdvancedEditor";

const RoutesController = () => {
  return (
    <>
      <Routes>
        <Route path="/ck" element={<Ckeditor />} />
        <Route path="/advanced" element={<AdvancedEditor />} />
      </Routes>
    </>
  );
};

export default RoutesController;
