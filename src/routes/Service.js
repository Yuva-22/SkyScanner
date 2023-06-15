import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img6 from "../assets/img6.jpeg";


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
      </>

    )

}

export default Service;