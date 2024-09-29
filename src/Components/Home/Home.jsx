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
                    we believe that your home is more than just a place—it's where memories are made.
                     Whether you're buying, selling, or renting, our dedicated team of real estate experts is here to guide you every step of the way.
                      With our extensive portfolio of properties and personalized service, we make your real estate journey seamless and enjoyable
                </p>
                <a href="#" className="hero-button">pick your plug</a>
            </div>
        </section>
    );   
}
export default Home;