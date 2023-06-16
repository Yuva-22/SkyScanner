import "./TripStyles.css";
import TripData from "./TripData";
import i5 from "../assets/paris.jpg";
import i6 from "../assets/img8.jpeg";
import i7 from "../assets/maldives.jpg";
import i8 from "../assets/allepey.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent trips</h1>
            <p>You can discover unique destinations</p>

            <div className="tripcard">

            <TripData 
            image={i5}
            heading="Paris-City of Lights"
            text="Paris is the country's cosmopolitan capital.
            The City of Love, as people call it, is said to be 
            one of the most beautiful and romantic cities brimming 
            with culture, art, fashion, food, and history. Home to 
            some of the most popular iconic monuments and museums, 
            Paris consists of a large part along the Seine designated 
            as a UNESCO World Heritage Site.One of the most significant 
            art repositories in the world, Paris harbors artistic lineage 
            under Renoir, Rodin, Picasso, Monet, and Van Gogh."  
            />
            <TripData 
            image={i6}
            heading="Colosseum,Rome"
            text="The Colosseum is one of the most famous attractions 
            in Rome and is where most gladiatorial fights took place. 
            Today, actors in gladiator clothes stand outside the 
            Colosseum, where you can take pictures with them. 
            The Colosseum is a testament to the ingenuity of the 
            builders, having stood the test of time. While parts 
            have been damaged, the Colosseum still remains standing 
            in most of its original glory today."            
            />
            <TripData 
            image={i7}
            heading="Maldives-A Tropical Heaven"
            text="The Maldives, a tropical haven of immaculate beaches, 
            are an archipelago of 1,192 coral islands grouped into natural 
            atolls, out of which only a few are inhabited. Time stands 
            still in the Maldives as you lie on the white sand beaches, 
            hearing the crystal clear waves crash against the seashore, 
            swim with the manta rays and reef sharks and feast on a wide 
            array of fishes with the locals. Be it adventure or leisure, 
            Maldives is your answer."            
            />

           <TripData 
            image={i8}
            heading="Alleppey-Venice of East"
            text="Officially called Alappuzha, Alleppey is known for 
            its network of canals and lagoons with beautiful backwaters 
            and the houseboats offering overnight stays. Located in the 
            southern part of Kerala, the coastline of Alleppey offers 
            some of the best beaches with water sports during the dry season.
            Kuttanad, also called the 'Rice Bowl of Kerala' covers a large part
            of Allapuzha and is home to lush green paddy fields, lakes and backwaters.  "            
            />

            </div>
        </div>
    );
}

export default Trip ;