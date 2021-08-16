import useFetch from "../useFetch";
import Vslider from './Vslider';

const About = () => {

    const { data: vehicles, isPending, error } = useFetch('https://jsondata-f63d.restdb.io/rest/vehicles/');
    return (
        <div className="hero-4" style={{
            backgroundImage: 'url("images/home-img.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '23% 0px'
        }}>
            <div className="A-container">
                <h1>About Us</h1>
                <div className="about-front">
                    <div className="about-details">
                        <h2>Ekam Travels , <text style={{ fontSize: "1.2rem" }}>Who we are and how do we make it possible</text></h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, fuga sint modi necessitatibus ea quod dicta! Ullam asperiores illo est!</p>
                    </div>
                    <div className="about-slider">
                        <Vslider/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;