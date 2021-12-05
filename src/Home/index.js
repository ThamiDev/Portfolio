import './home.scss';
import img from './pc.png';

function Home() {
    return (
        <div className="Home">

            <div className="left-container">
                <h1>I'm <br/>ThamiDev<span className="red">.</span></h1>
                <hr className="red"/>
                <p>Linkedin | Thami Sauvaire</p>
                <p>Github | ThamiDev</p>
                <p className="button-left">CONTACT ME</p>
            </div>

            <div className="middle-container">
                    <img className="home-picture" src={img} alt="moi-même" />
            </div>

            <div className="right-container">
                <h3 className="red">INTRODUCTION</h3>
                <h2>Full Stack Web Developer React/Node</h2>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.</p>
                <button>Learn more</button>
            </div>  

        </div>
    );
}

export default Home;