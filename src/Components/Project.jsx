import "./Project.css"

function Project(props){
    return(
    <div className="project" onClick={props.onOpen}>
        <h1>Project: {props.no}</h1>
        <h2>Project Name: {props.projectName}</h2>
        <img className="img" src={props.screenshot} alt={props.name} />
        <h3>Techs used: {props.tech}</h3>
        <h4>CLICK HERE:<a href={props.repo}>Github Link</a></h4>
        <p className="text">{props.description}</p>
        <p className="text">{props.shortNote}</p>
    </div>
    )
}

export default Project;