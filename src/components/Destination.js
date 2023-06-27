import DestinationData from "./DestinationData";
import "./Destinationstyles.css";
import i1 from "../assets/Manali2.jpg";
import i2 from "../assets/manali1.jpg";
import i3 from "../assets/coorg1.jpg";
import i4 from "../assets/coorg2.jpeg";
import i5 from "../assets/mussoorie1.jpg";
import i6 from "../assets/mussoorie2.jpg";
import i7 from "../assets/darjeeling1.jpg";
import i8 from "../assets/darjeeling2.jpg";



function Destination(){
    return(
     <div className="destination">
        <h1>Popular Destinations</h1>
        <p>The world is a Book and those who do not
            travel read only one page...</p>


        <DestinationData
        className="first-des"
        heading="MANALI-The Paradise"
        text="With spectacular valleys, breathtaking views, 
        snowcapped mountains, and lush forests of oak, 
        deodar, and pine, Manali is a magical hill station 
        at the northern end of Kullu valley in Himachal 
        Pradesh. Gifted to the world by the mighty Himalayas, 
        it is known to be one of the most popular destinations 
        for Honeymooners. Manali offers magnificent views of 
        the Pir Panjal and the Dhauladhar ranges, covered 
        in a thick blanket of snow for most of the year."
        img1={i1}
        img2={i2}
        />

       <DestinationData
        className="first-des-reverse"
        heading="COORG-The Scotland of India"
        text="Coorg, officially known as Kodagu, is the most 
        affluent hill station in Karnataka. It is well known 
        for its breathtakingly exotic scenery and lush greenery. 
        Forest covered hills, spice and coffee plantations 
        only add to the landscape. Madikeri is the region's 
        centre point with all transportation for getting around 
        starting from here. On a visit to Coorg, cover the beautiful 
        towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, 
        and Somwarpet, and experience the beautiful concept of 
        homestays to make your experience more memorable! "
        img1={i3}
        img2={i4}
        />

        <DestinationData
        className="first-des"
        heading="MUSSOORIE-The Queen of HillStations"
        text="Mussoorie is one of the most popular hill stations 
        located at a distance of 290 km from Delhi in the 
        Dehradun district of Uttarakhand. With a backdrop of the 
        Shivalik range of Himalayas and doon valley, Mussoorie, 
        also known as Queen of The Hills, stands at an altitude of 
        7000 feet above sea level. With a cool and pleasant 
        climate throughout the year,Mussoorie was once the 
        British summer capital. One of the most popular tourist 
        attractions in Mussoorie is The Mall, which is a slightly 
        steep boulevard with eateries and other shops lining 
        its entire stretch."
        img1={i5}
        img2={i6}
        />

        <DestinationData
        className="first-des-reverse"
        heading="DARJEELING-Queen of Himalayas"
        text="Darjeeling, the former summer capital of India under 
        the British Raj, has evolved into one of India's most 
        sought-after hill stations. This picturesque hill destination 
        in West Bengal is ideal for a romantic honeymoon. Darjeeling, 
        nestled among acres of tea estates, is 2,050 metres above sea 
        level and thus has a cool climate all year.The Darjeeling Himalayan
        Railway established back in 1881 is conferred the title of 
        World Heritage Status by UNESCO. "
        img1={i7}
        img2={i8}
        />


    </div>

    );
}

export default Destination ;