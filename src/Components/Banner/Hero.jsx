import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigation = () => {
    navigate("/home");
  };

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen flex items-center p-6 lg:p-16">
      {/* Left Side Image Carousel */}
      <div className=" w-1/2  hidden lg:flex flex-col space-y-4 mr-8">
        <div className="w-full h-full overflow-hidden rounded-lg shadow-lg border-4 border-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <img
            src={images[currentImage]}
            alt="Shuffling Images"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Text Content */}
      <div className=" w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500">
          People Grid
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mt-4 max-w-md">
          Your ultimate solution for resource allocation, skill matching, and
          project management.
        </p>
        <button
          onClick={handleNavigation}
          className="mt-6 px-10 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

// import "./Hero.css";
// import { useNavigate } from "react-router-dom";
// const Hero = () => {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     navigate("/home");
//   };

//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1>Welcome to PeopleGrid</h1>
//           <p>
//             Your ultimate solution for resource allocation, skill matching, and
//             project management.
//           </p>
//           <button onClick={handleNavigation} className="cta-button">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
