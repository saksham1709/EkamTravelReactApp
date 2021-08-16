import emailjs from 'emailjs-com';

// const Contact = () => {
export default function Contact() {

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
        <div className="hero-3" style={{
            backgroundImage: 'url("images/home-img.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '23% 0px'
        }}>
            <div className="C-container">
                <h1>Contact Us</h1>
                <div className="contact-front">
                    <div className="contact-form">
                        {/* <form name="contact" method="POST" data-netlify="true"> */}
                        <form onSubmit={sendEmail}>
                            <p className="relative">
                                <input type="text" required name="name" />
                                <span className="input-text">Name</span>
                            </p>
                            <p className="relative">
                                <input type="text" required name="number" />
                                <span className="input-text">Phone No.</span>
                            </p>
                            <p className="relative">
                                <input type="email" required name="mail" />
                                <span className="input-text">E-mail</span>
                            </p>
                            <p className="relative">
                                <textarea cols="40" rows="10" name="message" ></textarea>
                                <span className="input-text">Tour Details</span>
                            </p>
                            <p className="contact-submit">
                                <input type="submit" value="Send Details" />
                            </p>
                        </form>
                    </div>
                    <div className="contact-details">
                        <p>Phone: <a href="tel:+91-9205209865">+91-9810487548</a></p>
                        <p>E-mail: <a href="mailto:sakshamsharma1709@gmail.com">1225harish@gmail.com</a></p>
                        <p>Address: <a href="https://goo.gl/maps/i2poXkLD4PtzxntV7" target="_blank">230/29B Railway Colony Mandawali Street No.9A ,New Delhi-92</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default Contact;