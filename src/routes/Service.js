import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img6 from "../assets/img6.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={img6}
      title="Our Services"
      btnclass="hide"
      />
      <Trip />
      <Footer />
      </>

    )

}

export default Service;