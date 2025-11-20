import "./Project.css"

function Project(props){
    return(
    <div>
        <h1>Project Name: {props.projectName}</h1>
        <img src={props.screenshot} alt={props.name} />
        <h3>Techs used{props.tech}</h3>
        <a href={props.repo}>Github Link</a>
        <p>{props.shortNote}</p>
    </div>
)
}

export default Project;