import './Home.css';
import img from '../assets/aa.png';
import asdf from '../assets/asdf.pdf';
const Home = () => {
    return (
        <div className="home">
            <div className="info">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Distinctio, amet.</p>
                    <a href={asdf} download="Ashish.pdf" className="download-btn" >Download</a>
            </div>
            <div className="profile">
                <a href=""><img src= {img} alt="" /></a>
            </div>
        </div>
    )
}
export default Home;