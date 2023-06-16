import "./Footerstyles.css";


const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                 <h1>SkyScanner</h1>
                 <p>Choose your favourite destination..</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                   <h4>Contact</h4>
                   <p>Name: SkyScanner</p>
                   <p>Phone: 9876543210</p>
                   <p>Email: abc@gmail.com</p>
                </div> 
                <div>
                   <h4>COMMUNITY</h4>
                   <a href="/">Github</a>
                   <a href="/">Twitter</a>
                   <a href="/">Facebook</a>
                </div>
                <div>
                   <h4>HELP</h4>
                   <a href="/">Troubleshooting</a>
                   <a href="/">Support</a>
                   <a href="/">Contact us</a>
                </div>
                <div>
                   <h4>OTHERS</h4>
                   <a href="/">Terms of Service</a>
                   <a href="/">Privacy Policy</a>
                   <a href="/">License</a>
                </div>
                
            </div>
        </div>
    );
} 

export default Footer ;