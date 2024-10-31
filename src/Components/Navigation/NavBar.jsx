import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NavBar() {
  const routerLocation = useLocation();

  const setActive = (pathname) => routerLocation.hash === `#${pathname}`;

  useEffect(() => {
    if (routerLocation.hash) {
      const section = document.querySelector(routerLocation.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [routerLocation]);

  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 flex space-x-4">
      {[
        "home",
        "about",
        "clients",
        "employees",
        "rating",
        "contracts",
        "contact",
      ].map((section) => (
        <Link
          key={section}
          to={`#${section}`}
          className={`px-3 py-2 rounded ${
            setActive(section) ? "bg-blue-600" : "hover:bg-blue-500"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;

// // src/components/Navbar.jsx
// import { Link, useLocation } from "react-router-dom";
// import { useState,  } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const routerLocation = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const setActive = (pathname) => routerLocation.pathname === pathname;

//   return (
//     <nav className="bg-blue-600 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link
//               to="/"
//               className={`text-2xl font-bold ${
//                 setActive("/") ? "text-cyan-600" : ""
//               }`}
//             >
//               PeopleShores Allocation System
//             </Link>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md text-white hover:bg-blue-700"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden lg:flex space-x-4">
//             {["/", "/clients", "/employees", "/projects"].map((path) => (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`px-3 py-2 rounded-md text-base font-medium ${
//                   setActive(path) ? "bg-blue-700" : "hover:bg-blue-500"
//                 }`}
//               >
//                 {path.replace("/", "").toUpperCase() || "HOME"}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden px-2 pt-2 pb-3 space-y-1">
//           {["/", "/clients", "/employees", "/projects"].map((path) => (
//             <Link
//               key={path}
//               to={path}
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 setActive(path) ? "bg-blue-700" : "hover:bg-blue-500"
//               }`}
//             >
//               {path.replace("/", "").toUpperCase() || "HOME"}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
