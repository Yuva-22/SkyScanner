import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img4 from "../assets/img4.jpeg";


function About(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={img4}
      title="About Us"
      btnclass="hide"
      />
      
      </>

    )

}

export default About;