import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export const projects = [
  {
    id: 1,
    title: "Aritmatika Solver",
    description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/mercynjambi/njambikaritu",
    features: [
      "Menyelesaikan soal aritmatika otomatis",
      "Dukungan untuk berbagai operasi matematika",
      "Antarmuka yang sederhana dan mudah digunakan"
    ],
    technologies: ["JavaScript", "React", "Node.js"]
  },
  {
    id: 2,
    title: "AutoChat-Discord",
    description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/mercynjambi/njambikaritu",
    features: [
      "Pengiriman pesan otomatis",
      "Integrasi dengan bot Discord",
      "Penjadwalan fleksibel"
    ],
    technologies: ["Python", "Discord API", "Flask"]
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim dan pelacakan waktu.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/mercynjambi/njambikaritu",
    features: [
      "Kolaborasi tim",
      "Pelacakan waktu",
      "Notifikasi tugas"
    ],
    technologies: ["React", "Redux", "Firebase"]
  }
];

export function ProjectCard() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h5 className="project-title1">{project.title}</h5>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a href={project.demoUrl} className="project-button demo-button">
                  Live Demo
                </a>
                <Link to={`/project/${project.id}`} className="project-button details-button">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}