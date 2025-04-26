import './Navbar.css';
import logo from '../assets/aa.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="image" href="/">
                <img src={logo} alt="ashish" />
            </a>
            
            <div className="nav-links">
                <a href="/home">Home</a>
                <a href="/experience">Experience</a>
                <a href="/project">Project</a>
                <a href="/skills">Skills</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
