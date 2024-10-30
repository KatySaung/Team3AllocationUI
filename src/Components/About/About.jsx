function About() {
    return (
      <div className=" aboutUs__container">
        {/* About Us Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Our goal is to streamline business operations by offering features
            such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Client and Project Management</li>
            <li>Project Tracking and Staff Allocation</li>
            <li>Accurate Invoicing and Rate Card Management</li>
            <li>Insights into team availability and revenue generation</li>
          </ul>
          <p className="mt-6 text-gray-600">
            We aim to support your success by eliminating operational hassles,
            allowing you to focus on delivering top-notch technology solutions to
            businesses.
          </p>
        </section>
  
   
      </div>
    );
  }
  
  export default About;
  