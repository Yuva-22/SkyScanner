import "./Destinationstyles.css";
import { Component } from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";

class DestinationData extends Component{
     render(){
        return(
        <div className="first-des">
            <div className="des-text">
                 <h2>{this.props.heading}</h2>
                 <p>{this.props.text}</p>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1} />
                <img alt="img" src={this.props.img2} />
            </div>
        </div>

        );
    }    
}

export default DestinationData;

