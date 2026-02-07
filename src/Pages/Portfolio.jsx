import { useState } from "react";

import Popup from "../Components/Popup.jsx";
import Project from "../Components/Project.jsx";

import booktracker from "../assets/booktracker.png";
import fromsimg from "../assets/forms.png";
import djimg from "../assets/groupproject.png";
import minigame from "../assets/Minigame.png";
import bhromaon from "../assets/Bhromaon.png";
import sasdocument from "../assets/sasdocument.png";


function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");



  const projects = [
    {

      no: "1",
      projectName: "Form",
      screenshot: fromsimg,
      tech: "HTML, CSS, Forms",
      liveLink: "https://resilient-belekoy-c26627.netlify.app/",
      repo: "https://github.com/aripineninavya-rgb/form-design",
      description: "This project is a responsive HTML form designed to collect user information such as name, email, and other inputs. The form includes proper labels, required fields, and basic validation to ensure correct data entry. Through this project, I learned how to structure forms using semantic HTML, apply validation rules, and style forms using CSS for better usability and accessibility.",
      shortNote: "This project is a form that collects user information and displays the submitted results. I learned how to use HTML input fields, labels, and validation."

    },

    {
      no: "2",
      projectName: "Book Tracker",
      screenshot: booktracker,
      tech: "HTML, CSS, JavaScript",
      repo: "https://github.com/aripineninavya-rgb/indroduction-to-javascript",
      description: "The Book Tracker is a small JavaScript-based application that allows users to add and manage a list of books they have read. The app dynamically updates the UI based on user input and stored data. This project helped me understand JavaScript fundamentals such as arrays, objects, functions, and DOM manipulation, as well as how to organize logic for small interactive applications",
      shortNote: "A small app that tracks books I have read. I learned arrays, objects, and functions."
    },


    {

      no: "3",
      projectName: "DJ Theme Website (Group Project)",
      screenshot: djimg,
      tech: "HTML, CSS, Git, GitHub, Figma",
      liveLink: "https://reactprojectnavya.netlify.app/about",
      repo: "https://github.com/MPLarsson/Group-Project",
      description: "This was our first group project where we built a multi-page DJ-themed website. The website includes a landing page, about us / product page, gallery, and contact page. We focused on creating a consistent design, smooth navigation between pages, hover effects on all interactive elements, and a validated contact form. The project helped us understand how to plan, design, and build a complete website as a team using GitHub collaboration.",
      shortNote: "Learned how to collaborate using GitHub branches, translate Figma designs into real code, maintain consistent UI across multiple pages, and communicate effectively within a team. I was responsible for designing the UI in Figma and developing the About Us page."

    },

    {

      no: "4",
      projectName: "Mini game",
      screenshot: minigame,
      tech: "React, React Router, useState & useEffect, LocalStorage, External API, CSS",
      liveLink: "https://celebrated-creponne-b7897f.netlify.app/signup",
      repo: "https://github.com/aripineninavya-rgb/fecth-API",
      description: "This project is a small interactive Balloon Pop minigame built with React. Users can register and log in using credentials stored in LocalStorage, and once authenticated, they can access the game. The game fetches data from an external API and displays fun content when balloons are popped. The project demonstrates core React concepts, state management, routing, and browser storage",
      shortNote: "How to build a complete React flow (auth → routing → game). How APIs work and how to fetch and use external data. How to use LocalStorage for simple authentication. Debugging common React mistakes. Structuring components for scalability"
    },


    {
      no: "5",
      projectName: "Bhromaon Travel Website",
      screenshot: bhromaon,
      tech: "HTML5, CSS3, Sass (SCSS), Flexbox, CSS Grid, Responsive Design, Google Fonts, Font Awesome",
      liveLink: "https://reactprojectnavya.netlify.app/",
      repo: "https://github.com/aripineninavya-rgb/Html-test-1",
      description: "Bhromaon is a responsive travel website built to showcase destinations and services. The project uses semantic HTML, organized Sass partials, and modern CSS layout techniques (Flexbox and Grid) to create a visually appealing and accessible interface. It includes interactive elements like buttons, navigation, and social icons with hover/focus states, a validated search form, and is fully responsive down to mobile screens.",
      shortNote: "Learned to build semantic, responsive web pages using HTML, CSS, and Sass; implement Flexbox/Grid for layouts; add hover/focus states for interactivity; structure code with Sass partials; and handle form validation while following design requirements."
    },

    {
      no: "6",
      projectName: "Sasdocument",
      screenshot: sasdocument,
      tech: "HTML, CSS, SAS, Document Layout",
      liveLink: "https://stately-cocada-804527.netlify.app/",
      repo: "https://github.com/aripineninavya-rgb/sasdocument",
      description: "This project focuses on recreating a professional-looking document layout similar to an official SAS document using HTML and CSS. The goal was to achieve clean structure, alignment, spacing, and readability.",
      shortNote: "Learned how to use HTML and CSS to create a structured, professional document layout. Focused on typography, spacing, and alignment to mimic the style of an official SAS document."
    }


  ];

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    const numberMatch = project.no.toLowerCase().includes(searchText);

    const nameMatch = project.projectName.toLowerCase().includes(searchText);

    const techMatch = project.tech.toLowerCase().includes(searchText);

    const noteMatch = project.shortNote.toLowerCase().includes(searchText);

    return numberMatch || nameMatch || techMatch || noteMatch;
  });


  return (

    <div>
      <h2>My Projects</h2>

      <input

        type="text" placeholder="Seach projects..." value={search} onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px", width: "50%", marginBottom: "20px", fontSize: "16px"
        }} />

      <div>
        {filteredProjects.map((project, i) => (

          <Project
            key={i}
            {...project}
            onOpen={() => setSelectedProject(project)}
          />

        ))}
      </div>

      <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );




}
export default Portfolio;