import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img7 from "../assets/img7.jpeg";


function Contact(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={img7}
      title="Contact Us"
      btnclass="hide"
      />
      </>

    )

}

export default Contact;