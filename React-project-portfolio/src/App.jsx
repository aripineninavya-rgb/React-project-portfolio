import Project from "./Components/Project.jsx";
import booktracker from "./assets/booktracker.png";
import fromsimg from "./assets/forms.png";
import sasimg from "./assets/sas.png";

function App() {
  return(
    <div>
      <Project
      projectName = "Form"
      screenshot = {fromsimg}
      tech = "HTML, CSS, Forms"
      repo = "https://github.com/aripineninavya-rgb/form-design"
      shortNote = "This project is a form that collects user information and displays the submitted results. I learned how to use HTML input fields, labels, and validation."
      />

      <Project
      projectName = "Book Tracker"
      screenshot = {booktracker}
      tech = "HTML, CSS, JavaScript"
      repo = "https://github.com/aripineninavya-rgb/indroduction-to-javascript"
      shortNote = "A small app that tracks books I have read. I learned arrays, objects, and functions."
      />

      <Project
      projectName = "Book Tracker"
      screenshot = {sasimg}
      tech = "HTML, CSS, SAS"
      repo = "https://github.com/aripineninavya-rgb/sasdocument"
      shortNote = "I learned how to arrange content using HTML elements, how to style a document using CSS, and how to create proper spacing, alignment, and formatting similar to a real official document."
      />
    </div>
    )
}

export default App
