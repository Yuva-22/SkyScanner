import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img7 from "../assets/img7.jpeg";
import Footer from "../components/Footer";


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
      <Footer />
      </>

    )

}

export default Contact;