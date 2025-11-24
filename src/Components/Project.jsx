import "./Project.css"

function Project(props){
    return(
    <div className="project">
        <h1>Project:1</h1>
        <h2>Project Name: {props.projectName}</h2>
        <img className="img" src={props.screenshot} alt={props.name} />
        <h3>Techs used: {props.tech}</h3>
        <h4>CLICK HERE:<a href={props.repo}>Github Link</a></h4>
        <p>{props.shortNote}</p>
    </div>
    )
}

export default Project;