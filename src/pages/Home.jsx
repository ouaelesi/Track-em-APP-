import { Link } from "react-router-dom";
import Hello from "../components/Hello";

function Home() {
  return (
    <div className="text-center">
      <Hello />
      <Link to="/about">About Us</Link>
    </div>
  );
}

export default Home;
