import Project from "./Components/Project.jsx";
import booktracker from "./assets/booktracker.png";
import fromsimg from "./assets/forms.png";
import sasimg from "./assets/sas.png"

function App() {
  return(
    <div>
      <Project
      projectnName = "Book Tracker"
      screenshot = {booktracker}
      tech = "HTML, CSS, JavaScript"
      repo = "https://github.com/aripineninavya-rgb/indroduction-to-javascript"
      shortNote = "A small app that tracks books I have read. I learned arrays, objects, and functions."
      />
    </div>
    )

}

export default App
