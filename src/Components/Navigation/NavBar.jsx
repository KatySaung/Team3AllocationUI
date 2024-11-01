import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NavBar() {
  const routerLocation = useLocation();
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState(0);
  const [lastMonthRevenue, setLastMonthRevenue] = useState(0);

  // Fetch last month and current month revenue
  const fetchRevenues = async () => {
    try {
      //! Fetching monthly revenues
      const lastMonthResp = await axios.get(
        "http://localhost:8080/api/invoice/revenue/last-month"
      );
      setLastMonthRevenue(lastMonthResp.data);

      const currentMonthResp = await axios.get(
        "http://localhost:8080/api/invoice/revenue/current-month"
      );
      setCurrentMonthRevenue(currentMonthResp.data);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  useEffect(() => {
    fetchRevenues();
    const interval = setInterval(fetchRevenues, 3600000);
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

      <div className="ml-auto font-semibold flex space-x-4">
        <span>Revenue (Last Month): ${lastMonthRevenue.toFixed(2)}</span>
        <span>Revenue (This Month): ${currentMonthRevenue.toFixed(2)}</span>
      </div>
    </nav>
  );
}

export default NavBar;
