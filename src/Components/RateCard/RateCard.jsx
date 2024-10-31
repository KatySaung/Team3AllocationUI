import React, { useEffect, useState } from "react";

function RateCard() {
  const [rateCards, setRateCards] = useState([]);

  // Fetch employee rate data with fallback dummy data
  useEffect(() => {
    const fetchRateCards = async () => {
      try {
        const response = await fetch("https:/api.exmaple"); // Replace with actual API endpoint
        const data = await response.json();
        setRateCards(data);
      } catch (error) {
        console.error("Error fetching rate cards:", error);
        // Fallback to dummy data
        setRateCards([
          {
            id: 1,
            name: "John Doe",
            title: "Software Engineer",
            experience: 5,
            hourlyRate: 50,
          },
          {
            id: 2,
            name: "Jane Smith",
            title: "Project Manager",
            experience: 8,
            hourlyRate: 70,
          },
          {
            id: 3,
            name: "David Johnson",
            title: "Data Analyst",
            experience: 3,
            hourlyRate: 45,
          },
          {
            id: 4,
            name: "Emily Davis",
            title: "UX Designer",
            experience: 4,
            hourlyRate: 60,
          },
        ]);
      }
    };
    fetchRateCards();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Rate Card
      </h1>
      <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto">
        {rateCards.length > 0 ? (
          rateCards.map((employee) => (
            <div
              key={employee.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {employee.name}
              </h3>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Title:</span> {employee.title}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Experience:</span>{" "}
                {employee.experience} years
              </p>
              <p className="text-lg font-semibold text-green-600">
                <span className="font-medium">Hourly Rate:</span> $
                {employee.hourlyRate}/hr
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No rate cards available.</p>
        )}
      </div>
    </div>
  );
}

export default RateCard;
