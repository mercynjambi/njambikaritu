import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export const projects = [
  {
    id: 1,
    title: "QuickStay",
    description: " This application allows users to browse, book, and manage hotel reservations.It features secure user authentication, real-time hotel listings with filtering options, and a dynamic booking management system ",
    image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww",
    demoUrl: "https://booking-system-two-wine.vercel.app/",
    githubUrl: "https://github.com/mercynjambi/booking-system",
    features: [
      "User Authentication & Authorization",
      "Dynamic Hotel Listings",
      "Booking Management System",

      
    ],
    technologies: [ "React", "Tailwind", "Clerk", "MomgoDB", "Express Js"]
  },
  {
    id: 2,
    title: "Tubonge",
    description: "A chat app built with React and Firebase that allows real-time messaging and  user authentication.",
    image: "https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    demoUrl: "https://tubonge-ruddy.vercel.app/",
    githubUrl: "https://github.com/mercynjambi/tubonge",
    features: [
      "Real-Time Messaging",
      "User Authentication",
      "Chat History Persistence"
    ],
    technologies: ["React",  "Firebase"]
  },
  {
    id: 3,
    title: "Harmony hub",
    description: "This is a music app built using React.js. It allows users to search for songs and listen to music.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    demoUrl: "https://harmony-hub-six.vercel.app/",
    githubUrl: "https://github.com/mercynjambi/harmony-hub",
    features: [
      "Search for songs by title or artist",
      "Listen to music on-demand",
      "Save your favorite songs"
    ],
    technologies: ["React", "Bootstrap", ]
  },

  {
    "id": 4,
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
  "id": 5,
  "title": "SmartMeal AI",
  "description": "A full-stack AI-powered Meal Plan Generator built with React and Flask. This application creates personalized meal plans for breakfast, lunch, and dinner based on the user's age, height, weight, health conditions, and location. It aims to promote healthier eating habits through customized, geo-relevant nutrition recommendations.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
  "demoUrl": "https://smart-meal-zeta.vercel.app/",
  "githubUrl": "https://github.com/mercynjambi/SmartMeal",
  "features": [
    "Personalized meal plan generation using AI",
    "Inputs include age, height, weight, health condition, preferences, and location",
    "Downloadable meal plan in PDF format",
    "Local storage support for saving previous meal plans",
    "Responsive and modern UI built with Tailwind CSS",
    "Expandable to include grocery lists, nutritional analysis, or calorie tracking"
  ],
  "technologies": ["React", "Flask", "OpenAI API", "Tailwind CSS"]
}
  
  // {
  //   id: 4,
  //   title: "My Little Thing",
  //   description: "A community-based organization aiming to empower marginalized young women through entrepreneurship and support for teen and young mothers.",
  //   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  //   demoUrl: "https://littlethings-omega.vercel.app/",
  //   githubUrl: "https://github.com/mercynjambi/littlethings",
  //   features: [
  //     "Kolaborasi tim",
  //     "Pelacakan waktu",
  //     "Notifikasi tugas"
  //   ],
  //   technologies: ["React"]
  // }

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