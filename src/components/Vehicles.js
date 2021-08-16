import useFetch from "../useFetch";
import { useParams } from "react-router";
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1105, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Vehicle = () => {
    const { _id } = useParams();

    const { data: vehicles, error, isPending } = useFetch('https://jsondata-f63d.restdb.io/rest/vehicles/' + _id);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {vehicles && (
                <div>
                    <div className="hero-5" style={{
                        backgroundImage: `url(${vehicles.img1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="heading">
                            <h1>{vehicles.name}</h1>
                        </div>
                    </div>
                    <div className="V-container">
                        <div className="vehicle">
                            <div className="vehicle-details">
                                <p>{vehicles.para1}</p>
                                <p>{vehicles.para2}</p>
                                <p>{vehicles.para3}</p>
                                <p>{vehicles.para4}</p>
                            </div>
                            <div className="vehicle-rates">
                                <table>
                                    <tr>
                                        <th>Distance(km)</th>
                                        <th>Hours</th>
                                        <th>Rates</th>
                                        <th>Extra</th>
                                    </tr>
                                    <tr>
                                        <td>{vehicles.rc1}</td>
                                        <td>{vehicles.rc2}</td>
                                        <td>{vehicles.rc3}</td>
                                        <td>{vehicles.rc4}</td>
                                    </tr>
                                    <tr>
                                        <td>{vehicles.rc5}</td>
                                        <td>{vehicles.rc6}</td>
                                        <td>{vehicles.rc7}</td>
                                        <td>{vehicles.rc8}</td>
                                    </tr>
                                    <tr>
                                        <td>{vehicles.rc9}</td>
                                        <td>{vehicles.rc10}</td>
                                        <td>{vehicles.rc11}</td>
                                        <td>{vehicles.rc12}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="imp box">*</span>{vehicles.rc13}</td>
                                        <td>{vehicles.rc14}</td>
                                        <td>{vehicles.rc15}</td>
                                        <td>{vehicles.rc16}</td>
                                    </tr>
                                </table>
                                <p style={{
                                        textAlign: 'center',
                                        marginTop: '1rem',
                                        color: 'white',
                                        fontSize: '14px'
                                }}><span className="imp1">*</span>for local Delhi-NCR</p>
                            </div>
                        </div>
                        <Link to="/contact">Contact Now</Link>
                        <p className="TC">*All Toll, State Tax, Parking Are Extra.<br />*Night Time Allowance (10:00PM - 5:30AM) - Rs.300/-</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vehicle;