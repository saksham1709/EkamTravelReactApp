import ServicesItems from './ServicesItems';

const Services = () => {
    return (
        <div className="hero-2" style={{
            backgroundImage: 'url("images/home-img.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '23% 0px'
        }}>
            <div className="S-container">
                <div className="services">
                    <h1>Our Services</h1>
                    <div className="services-cards">
                        <ServicesItems
                            src='./images/S-img1.jpg'
                            head='Exclusive Packages'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, inventore.'
                        />
                        <ServicesItems
                            src='/images/S-img2.jpg'
                            head='World Class Services'
                            text='Some quick example text to build on the card title and make up the bulk of the card content.'
                        />
                        <ServicesItems
                            src='/images/S-img3.jpg'
                            head='Best Travel Guide'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, inventore.'
                        />
                        <ServicesItems
                            src='/images/S-img4.jpg'
                            head='100% Secure'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, inventore.'
                        />
                        <ServicesItems
                            src='/images/S-img5.jpg'
                            head='Price Guarantee'
                            text='Find our lowest price to destinations worldwide, guaranteed.'
                        />
                        <ServicesItems
                            src='/images/S-img6.jpg'
                            head='Easy Booking'
                            text='Search, select and save - the fastest way to book your trip.'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;