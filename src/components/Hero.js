import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

// const Hero = () => {
export default function Hero() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mquhmr2', 'template_j2mv89l', e.target, 'user_MHwgu7lkCO0FHXyxyOup7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="hero" style={{
            backgroundImage: 'url("images/home-img.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '23% 0px'
        }}>
            <div className="container">
                <div className="hero-front">
                    <div className="hero-details">
                        <h1>Learn From The Expert</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                        <Link to="/contact" className="hero-button">Book Now</Link>
                    </div>
                    <div className="hero-form">
                        <h3>Send Details</h3>
                        {/* <form name="hero-contact" method="POST" data-netlify="true">*/}
                        <form onSubmit={sendEmail}>
                            <input required type="text" placeholder='Enter your Name' name="name" />
                            <input required type="text" placeholder='Enter your Phone No.' name="number" />
                            <input required type="email" placeholder='Enter your Email' name="mail"/>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default Hero;