// import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/helpers/defaultPhoto";
import { useLocation } from "react-router";

const House = () => {
    const location = useLocation();
    const { house } = location.state;

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid"
                        src={
                            house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
                        }
                        alt="House Picture" />
                </div>
            </div>
        </div>
    )
}

export default House;