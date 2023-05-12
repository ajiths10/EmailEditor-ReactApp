import "./style/style.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Link to={`/`}>Editor</Link> <Link to={`/advanced`}>Advanced Editor</Link>
    </div>
  );
};

export default Home;
