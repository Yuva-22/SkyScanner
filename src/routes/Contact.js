import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img7 from "../assets/img7.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Chat from "../components/Chat";


function Contact(){
    return(
      <>
      <Chat />
      <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={img7}
      title="Contact Us"
      btnclass="hide"
      />
      <ContactForm />
      <Footer />
      </>

    )

}

export default Contact;