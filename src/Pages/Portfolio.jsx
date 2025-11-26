import { useState } from "react";

import Popup from "../Components/Popup.jsx";
import Project from "../Components/Project.jsx";

import booktracker from "../assets/booktracker.png";
import fromsimg from "../assets/forms.png";
import sasimg from "../assets/sas.png";

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");

    
    
    const projects =[
      {

        no : "1",
        projectName : "Form",
        screenshot : fromsimg,
        tech : "HTML, CSS, Forms",
        repo : "https://github.com/aripineninavya-rgb/form-design",
        shortNote : "This project is a form that collects user information and displays the submitted results. I learned how to use HTML input fields, labels, and validation."
      
      },

      {
        no : "2",
        projectName : "Book Tracker",
        screenshot : booktracker,
        tech : "HTML, CSS, JavaScript",
        repo : "https://github.com/aripineninavya-rgb/indroduction-to-javascript",
        shortNote : "A small app that tracks books I have read. I learned arrays, objects, and functions."
                

      },

      {

        no : "3",
        projectName : "Sas Document",
        screenshot : sasimg,
        tech : "HTML, CSS, SAS",
        repo : "https://github.com/aripineninavya-rgb/sasdocument",
        shortNote : "I learned how to arrange content using HTML elements, how to style a document using CSS, and how to create proper spacing, alignment, and formatting similar to a real official document."
                
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
           
    
    return(

      <div>
        <h2>My Projects</h2>

        <input 
        
        type="text" placeholder="Seach projects..." value={search} onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px", width: "50%", marginBottom: "20px", fontSize: "16px"
        }}/>

        <div>
        {filteredProjects.map((project, i) => (

           <Project
            key={i}
            {...project}
            onOpen={() => setSelectedProject(project)}
            />
            
        ))}
        </div>

        <Popup project={selectedProject} onClose={()=>setSelectedProject(null)} />
      </div>
    );
       
        
   

}
export default Portfolio;