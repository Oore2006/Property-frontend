import React from "react"
import "./Home.css";
import Background from "/Background.jpg"

const Home =  () => {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* <img src={Background} alt="" /> */}
                <h1 className="hero-title">
                    Adelanre Consulting Agency
                </h1>
                <p className="hero-description"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquid hic nobis, doloribus fugit ut voluptatibus temporibus, exercitationem sunt quo adipisci debitis? Repudiandae, dicta et provident ratione aliquam aperiam eaque.
                </p>
                <a href="#" className="hero-button">pick your plug</a>
            </div>
        </section>
    );   
}
export default Home;