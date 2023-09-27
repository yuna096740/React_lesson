import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/Home/detailA">DetailA</Link>
      <Link to="/Home/detailB">DetailB</Link>
    </div>
  );
}