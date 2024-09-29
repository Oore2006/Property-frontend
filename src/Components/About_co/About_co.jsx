import  "./About_co.css"
import About from "/About.jpg"

const About_co = () => {
    return(
       <article className="article" >
            <div className="hero">
    {/* <img src={About} alt=""  className="image"/> */}
            <h1 className="about-title">About Us</h1>
            <p className="about">Welcome to our website! we are dedicated to providing quality servies and information
            we believe that your home is more than just a place it's where memories are made. Whether you're buying, selling, or renting, our dedicated team of real estate experts is here to guide you every step of the way. With our extensive portfolio of properties and personalized service, we make your real estate journey seamless and enjoyable
           </p>
            </div>
            <div className="container">
                <div className="image">
                    <img src={"/About.jpg"} alt="" />
                </div>
                <div className="text">
                    <h1>This is us.</h1>
                </div>
            </div>
       
        
       
       </article>
    )
}

export default About_co;