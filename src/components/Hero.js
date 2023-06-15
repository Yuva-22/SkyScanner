import "./HeroStyles.css";
import mountain from "../assets/img1.jpeg";

function Hero(){
    return(<>
      <div className="hero">
          <img src={mountain} alt="hero"></img>
      </div>
    </>)

}

export default Hero;