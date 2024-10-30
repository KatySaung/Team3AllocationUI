const developers = [
  {
    name: "Jash",
    email: "jash.shukla@peopleshores.com",
    linkedin: "https://www.linkedin.com/in/jash",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Charles",
    email: "charles.shields@peopleshores.com",
    linkedin: "https://www.linkedin.com/in/charles",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Kat",
    email: "katherine.saung@peopleshores.com",
    linkedin: "https://www.linkedin.com/in/kat",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Caitlin",
    email: "caitlin.mcharris@peopleshores.com",
    linkedin: "https://www.linkedin.com/in/caitlin",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Edgy",
    email: "edgy.gilles@peopleshores.com",
    linkedin: "https://www.linkedin.com/in/edgy",
    image: "https://via.placeholder.com/100",
  },
];

function Contact() {
  return (
    <footer className="bg-blue-800 text-white p-8">
      <h1 className="text-3xl font-extrabold text-center mb-6">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {dev.name}
            </h3>
            <p className="text-center mb-1">
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto:${dev.email}`}
                className="text-blue-600 hover:underline"
              >
                {dev.email}
              </a>
            </p>
            <p className="text-center">
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Profile
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p>
          &copy; {new Date().getFullYear()} PeopleShores Allocation System. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
