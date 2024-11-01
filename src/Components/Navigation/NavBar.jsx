import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NavBar() {
  const routerLocation = useLocation();
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState(0);
  const [lastMonthRevenue, setLastMonthRevenue] = useState(0);
  const [revInput, setRevInput] = useState(10);

  const fetchRevenues = async () => {
    try {
      //! Fetching monthly revenues
      const lastMonthResp = await axios.get(
        `http://localhost:8080/api/invoice/calculate_revenue/10`
      );
      setLastMonthRevenue(lastMonthResp.data);

      const currentMonthResp = await axios.get(
        `http://localhost:8080/api/invoice/calculate_revenue/09`
      );
      setCurrentMonthRevenue(currentMonthResp.data);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  useEffect(() => {
    fetchRevenues();
    const interval = setInterval(fetchRevenues, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 flex space-x-4 items-center">
      <h1 className="nav_title">
        <div className="title">PeopleGrid</div>
      </h1>
      {[
        "home",
        "clients",
         "contracts",
        "employees",
        "rating",
       
        "projects",
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

      <div className="ml-auto font-semibold flex space-x-4">
        <span>Revenue (Last Month): ${lastMonthRevenue.toFixed(2)}</span>
        <span>Revenue (This Month): ${currentMonthRevenue.toFixed(2)}</span>
      </div>
    </nav>
  );
}

export default NavBar;
