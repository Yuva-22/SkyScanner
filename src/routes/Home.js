import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/img1.jpeg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero"
      heroImg={img1}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      btntext="Travel plan"
      url="/"
      btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
      </>

    )

}

export default Home;