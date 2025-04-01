import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export const projects = [
  {
    id: 1,
    title: "Academi",
    description: "A comprehensive school management system that enables students, teachers, and parents to interact seamlessly. It offers features like real-time grade tracking, class schedule management, and assignment submission, empowering each role with personalized access and communication tools.",
    image: "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sfGVufDB8fDB8fHww",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/mercynjambi/academi",
    features: [
      "Role-based access for teachers, students, and parents",
      "Real-time grade tracking and progress monitoring",
      "Class schedule management",

      
    ],
    technologies: [ "React", "Django"]
  },
  {
    id: 2,
    title: "Tubonge",
    description: "A chat app built with React and Firebase that allows real-time messaging and  user authentication.",
    image: "https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/mercynjambi/tubonge",
    features: [
      "Pengiriman pesan otomatis",
      "Integrasi dengan bot Discord",
      "Penjadwalan fleksibel"
    ],
    technologies: ["React",  "Firebase"]
  },
  {
    id: 3,
    title: "Harmony hub",
    description: "This is a music app built using React.js. It allows users to search for songs and listen to music.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    demoUrl: "https://github.com/mercynjambi/njambikaritu",
    githubUrl: "https://github.com/nezhprodigy/harmony-hub",
    features: [
      "Search for songs by title or artist",
      "Listen to music on-demand",
      "Save your favorite songs"
    ],
    technologies: ["React", "Bootstrap", ]
  },

  {
    "id": 2,
    "title": "Tabibu",
    "description": "A full-stack Doctor Appointment Booking system built with React, Django, MongoDB, and Express. This project allows patients to book appointments, doctors to manage their appointments and earnings, and admins to manage appointments and doctor profiles.",
    "image": "https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RE9DVE9SU3xlbnwwfHwwfHx8MA%3D%3D",
    "demoUrl": "https://github.com/mercynjambi/tabibu",
    "githubUrl": "https://github.com/mercynjambi/tabibu",
    "features": [
      "Patient login and appointment booking",
      "Doctor login and appointment management with earnings tracking",
      "Admin dashboard for managing appointments and doctor profiles",
      "Integration of online payment gateways for appointment fee payment",
      "Customizable for use in college projects or personal portfolio"
    ],
    "technologies": ["React", "Django", "MongoDB"]
  },
  
  {
    id: 4,
    title: "My Little Thing",
    description: "A community-based organization aiming to empower marginalized young women through entrepreneurship and support for teen and young mothers.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    demoUrl: "https://littlethings-omega.vercel.app/",
    githubUrl: "https://github.com/mercynjambi/littlethings",
    features: [
      "Kolaborasi tim",
      "Pelacakan waktu",
      "Notifikasi tugas"
    ],
    technologies: ["React"]
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