// import NavBar from "./Components/Navigation/NavBar";
// import ClientList from "./Components/Clients/ClientsList";
// import Employees from "./Components/Employees/Employees";
// import RateCard from "./Components/RateCard/RateCard";
// import Contracts from "./Components/Contracts/Contracts";
// import Contact from "./Components/Contact/Contact";
// import Banner from "./Components/Banner/Banner";
// import InvoiceList from "./Components/Invoice/Invoice";
// import "./App.css";

// import Projects from "./Components/Projects/Projects";
// import Skills from "./Components/Skills/Skills";
// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <section id="home" className="p-8 home">
//         <h1 className="text-4xl font-extrabold text-center">
//           Welcome to People Shores Allocation System
//           <Banner />
//         </h1>
//       </section>
//       <section id="about" className="p-8 bg-gray-100">
//         <p className="text-lg text-center">
//           This system helps manage clients, contracts, employees, and rate cards
//           efficiently.
//         </p>
//       </section>
//       <section id="clients">
//         <ClientList />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="employees">
//         <Employees />
//       </section>
//       <section id="rating">
//         <RateCard />
//       </section>
//       <section id="contracts">
//         <Contracts />
//       </section>
//       <section id="invoice">
//         <InvoiceList />
//       </section>
//       <section id="skills">
//         <Skills />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Banner/Hero";
import MainContent from "./Components/MainContent/MainContent"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
