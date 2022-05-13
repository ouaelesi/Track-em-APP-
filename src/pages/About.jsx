import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p>We are x-eptions team</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default About;
