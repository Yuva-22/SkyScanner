import DestinationData from "./DestinationData";
import "./Destinationstyles.css";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";


const Destination = () =>{
    return(
     <div className="destination">
        <h1>Popular Destinations</h1>
        <p>The world is a Book and those who do not
            travel read only one page...</p>


        <DestinationData
        heading="Taal volcano"
        text="Eros in cursus turpis massa tincidunt 
        dui. Condimentum id venenatis a condimentum. 
        Urna neque viverra justo nec. Consectetur 
        adipiscing elit duis tristique sollicitudin 
        nibh. Fermentum odio eu feugiat pretium. 
        A diam maecenas sed enim ut sem viverra 
        aliquet. Velit ut tortor pretium viverra 
        suspendisse potenti nullam. Volutpat commodo 
        sed egestas egestas fringilla phasellus 
        faucibus scelerisque. Dignissim diam quis 
        enim lobortis scelerisque fermentum dui. 
        Gravida neque convallis a cras semper. 
        In fermentum posuere urna nec tincidunt 
        praesent semper feugiat."
        img1={i1}
        img2={i2}
        />


    </div>

    );
}

export default Destination ;