import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to="/compornents/Home">DetailA</Link>
      <Link to="/compornents/Home">DetailB</Link>
    </div>
  );
}