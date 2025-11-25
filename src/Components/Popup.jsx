import "./Popup.css"

function Popup({project, onClose}){
    if (!project) return null;

    return(
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-box" onClick={(e)=> e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>

                <h2>{project.projectName}</h2>
                <img src={project.screenshot} alt = "" className="popup-img" />
                <h3>Techs used: {project.tech}</h3>
                <h4>CLICK HERE:<a href={project.repo}>Github Link</a></h4>
                <p>{project.shortNote}</p>
            </div>
        </div>
    )

}

export default Popup;