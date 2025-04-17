import React from "react";
import './Experience.css';

const experiences = [
    {
        role: "Frontend Developer",
        company: "Tech Corp",
        date: "Jan 2022 – Present",
        description: "Built responsive UIs using React. Led a team and improved performance by 30%."
    },
    {
        role: "Web Developer",
        company: "Dev Solutions",
        date: "Jun 2020 – Dec 2021",
        description: "Created modern web apps and integrated REST APIs. Focused on mobile-first design."
    },
    {
        role: "UI/UX Intern",
        company: "Creative Minds",
        date: "Jan 2020 – May 2020",
        description: "Assisted in wireframing and prototyping. Conducted user testing for product validation."
    },
    {
        role: "Freelancer",
        company: "Remote",
        date: "2019 – Present",
        description: "Delivered websites for small businesses. Handled both frontend and backend tasks."
    }
];

const Experience = () => {
    return (
        <div className="experience-section">
            <h1 className="experience-title">Experience</h1>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div className="exp-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="exp-header">
                            <h3>{exp.role}</h3>
                            <span className="exp-company">@ {exp.company}</span>
                        </div>
                        <span className="exp-date">{exp.date}</span>
                        <p className="exp-description">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
