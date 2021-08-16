import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1105, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

class Vslider extends Component {
    state = {
        vehicles: [
            {
                name: "Innova Crysta",
                seats: "5+1",
                img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "1",
                _id: "611a3387d943be7d0004b930"

            },
            {
                name: "Swift Dzire",
                seats: "3+1",
                img: "https://imgd.aeplcdn.com/664x374/n/lwfuusa_1483117.jpg?q=85",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "2",
                _id: "611a3387d943be7d0004b931"
            },
            {
                name: "Etios",
                seats: "3+1",
                img: "https://imgd.aeplcdn.com/0x0/cw/ec/24731/Toyota-Platinum-Etios-Exterior-119077.jpg?wm=0",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "3",
                _id: "611a3387d943be7d0004b932"
            },
            {
                name: "Ertiga",
                seats: "6+1",
                img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FGalleries%2F20190322051351_Maruti-Ertiga-Sport-white.jpg&h=578&w=872&c=1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "4",
                _id: "611a3387d943be7d0004b933"
            },
            {
                name: "Tempo Traveller",
                seats: "12+1",
                img: "https://5.imimg.com/data5/AJ/WP/MY-10296644/tempo-traveller-12-26-seaters-500x500.jpg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "5",
                _id: "611a3387d943be7d0004b934"
            },
            {
                name: "Tempo Traveller",
                seats: "15+1",
                img: "https://5.imimg.com/data5/GR/XD/MG/SELLER-35805332/15-seater-tempo-traveller-500x500.jpg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quas nesciunt facere possimus asperiores expedita doloremque, nam culpa eaque.",
                id: "6",
                _id: "611a3387d943be7d0004b935"
            }
        ]
    }

    render() {
        const { vehicles } = this.state;
        return (
            < Carousel breakPoints={breakPoints} >
                {vehicles.map((vehicles) => (
                <div className="vslider-preview" key={vehicles._id}>
                    <figure className="V-card-pic-wrap " data-category={vehicles.seats}>
                        <img src={vehicles.img} alt="" className="S-card-img vslider-img" />
                    </figure>
                    <div className="S-card-info">
                        <h4 className="S-card-head">{vehicles.name}</h4>
                        <p className="S-card-text">{vehicles.description}</p>
                        <Link to={`/vehicles/${vehicles._id}`} className="vslider-button">Learn more</Link>
                    </div> 
                </div>
            ))}
            </Carousel >
        )
    }

}



export default Vslider;