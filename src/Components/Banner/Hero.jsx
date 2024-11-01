import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/home");
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to PeopleGrid</h1>
          <p>
            Your ultimate solution for resource allocation, skill matching, and
            project management.
          </p>
          <button onClick={handleNavigation} className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
