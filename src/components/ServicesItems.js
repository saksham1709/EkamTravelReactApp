import { Link } from "react-router-dom";

const ServicesItems = (props) => {
    return (
        <>
            <div className="S-card">
                <figure className="S-card-pic-wrap">
                    <img src={props.src} alt="" className="S-card-img" />
                </figure>
                <div className="S-card-info">
                    <Link to="/contact"><h4 className="S-card-head">{props.head}</h4></Link>
                    <p className="S-card-text">{props.text}</p>
                </div>
            </div>
        </>
    );
}


export default ServicesItems;