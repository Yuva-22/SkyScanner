import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img2 from "../assets/img2.jpeg";


function About(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={img2}
      title="About"
      text="Choose Your Favourite Destination"
      btntext="Travel plan"
      url="/"
      btnclass="show"
      />
      
      </>

    )

}

export default About;