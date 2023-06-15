import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/img1.jpeg";

function Home(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero"
      heroImg={img1}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      />
      </>

    )

}

export default Home;