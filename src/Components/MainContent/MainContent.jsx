
import NavBar from "../Navigation/NavBar";
import ClientList from "../Clients/ClientsList";
import Employees from "../Employees/Employees";
import RateCard from "../RateCard/RateCard";
import Contracts from "../Contracts/Contracts";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";
import InvoiceList from "../Invoice/Invoice";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const MainContent = () => {
  return (
    <div className="MainContent">
      <NavBar />

      {/* <section id="home" className="p-8 home">
        <h1 className="text-4xl font-extrabold text-center">
          Welcome to People Shores Allocation System
          <Banner />
        </h1>
      </section>

      <section id="about" className="p-8 bg-gray-100">
        <p className="text-lg text-center">
          This system helps manage clients, contracts, employees, and rate cards
          efficiently.
        </p>
      </section> */}

      <section id="clients">
        <ClientList />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="employees">
        <Employees />
      </section>

      <section id="rating">
        <RateCard />
      </section>

      <section id="contracts">
        <Contracts />
      </section>

      <section id="invoice">
        <InvoiceList />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainContent;
