import { useState, useEffect } from "react";
import axios from "axios";

const Skills = ({ selectedSkills = [], onSkillSelect }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/skills");
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Available Skills</h3>
      <ul className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`p-2 border rounded-lg cursor-pointer ${
              selectedSkills.includes(skill.name)
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => onSkillSelect(skill.name)}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
