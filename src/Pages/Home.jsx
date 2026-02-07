import Homepageimg from "../assets/Homepageimg.png"

function Home() {
    return(
        <div className="Pages">
            <img src={Homepageimg} alt="Homepage" />
            <h1 className="main-heading">Hi, I’m Navyasri 👋</h1>
            <h3 className="sub-headind">Junior Frontend Developer with a UI/UX background</h3>
            <h4>I build user-friendly, responsive web applications using HTML, CSS, JavaScript, and React — with a strong focus on usability and design.</h4>
        </div>
    )

}
export default Home;