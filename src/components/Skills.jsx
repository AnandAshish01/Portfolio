import React from "react";
import './Skills.css';

// ✅ Importing images from src/assets
import reactImg from '../assets/react.png';
import jsImg from '../assets/react.png';
import java from '../assets/java.png';
import htmlImg from '../assets/react.png';
import cssImg from '../assets/react.png';
import nodeImg from '../assets/react.png';
import mongoImg from '../assets/react.png';
import gitImg from '../assets/react.png';
import phpImg from '../assets/react.png'; // Replace with 'php.png' if that's what you meant

// ✅ Skill data array using imported images
const skills = [
    { name: "React", image: reactImg },
    { name: "JavaScript", image: jsImg },
    { name: "Java", image: java },
    { name: "HTML5", image: htmlImg },
    { name: "CSS3", image: cssImg },
    { name: "Node.js", image: nodeImg },
    { name: "MongoDB", image: mongoImg },
    { name: "Git", image: gitImg },
    { name: "PHP", image: phpImg },
];

const Skills = () => {
    return (
        <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
