import "./TripStyles.css";
import TripData from "./TripData";
import i5 from "../assets/5.jpg";
import i6 from "../assets/6.jpg";
import i8 from "../assets/9.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent trips</h1>
            <p>You can discover unique destinations</p>

            <div className="tripcard">

            <TripData 
            image={i5}
            heading="First Place"
            text="Velit ut tortor pretium viverra 
            suspendisse potenti nullam. Volutpat commodo 
            sed egestas egestas fringilla phasellus 
            faucibus scelerisque. Dignissim diam quis 
            enim lobortis scelerisque fermentum dui. 
            Gravida neque convallis a cras semper."            
            />
            <TripData 
            image={i6}
            heading="Second Place"
            text="Velit ut tortor pretium viverra 
            suspendisse potenti nullam. Volutpat commodo 
            sed egestas egestas fringilla phasellus 
            faucibus scelerisque. Dignissim diam quis 
            enim lobortis scelerisque fermentum dui. 
            Gravida neque convallis a cras semper."            
            />
            <TripData 
            image={i8}
            heading="Third Place"
            text="Velit ut tortor pretium viverra 
            suspendisse potenti nullam. Volutpat commodo 
            sed egestas egestas fringilla phasellus 
            faucibus scelerisque. Dignissim diam quis 
            enim lobortis scelerisque fermentum dui. 
            Gravida neque convallis a cras semper."            
            />

            </div>
        </div>
    );
}

export default Trip ;