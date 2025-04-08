// import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/helpers/defaultPhoto";
import { useLocation } from "react-router";
import Image from "next/image";
import currencyFormatter from "@/helpers/currencyFormatter";
import Bids from "./bids";

const House = () => {
    const location = useLocation();
    const { house } = location.state;

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <Image className="img-fluid"
                        src={ house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto}
                        alt="House Picture"
                        width={600}
                        height={400} />
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                        {currencyFormatter.format(house.price)}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">{house.description}</div>
                </div>
                <Bids house={house} />
            </div>
        </div>
    )
}

export default House;