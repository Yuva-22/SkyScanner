import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img4 from "../assets/img4.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Chat from "../components/Chat";


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
      <AboutUs />
      <Footer />
      </>

    )

}

export default About;