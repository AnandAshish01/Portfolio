import React from "react";
import './Project.css';

const projects = [
    {
        title: "Portfolio Website",
        description: "A sleek personal portfolio to showcase my work and skills.",
        image: "/images/portfolio.png",
        liveLink: "https://yourportfolio.com",
        githubLink: "https://github.com/yourusername/portfolio"
    },
    {
        title: "E-Commerce App",
        description: "A full-stack MERN application with payment integration.",
        image: "/images/ecommerce.png",
        liveLink: "https://yourecommerce.com",
        githubLink: "https://github.com/yourusername/ecommerce-app"
    },
    {
        title: "Weather App",
        description: "A responsive app that fetches real-time weather data using OpenWeather API.",
        image: "/images/weather.png",
        liveLink: "https://yourweatherapp.com",
        githubLink: "https://github.com/yourusername/weather-app"
    },
    {
        title: "Blog Platform",
        description: "A dynamic blogging platform with Markdown support and user authentication.",
        image: "/images/blog.png",
        liveLink: "https://yourblog.com",
        githubLink: "https://github.com/yourusername/blog-platform"
    }
];

const Project = () => {
    return (
        <div className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                                <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
