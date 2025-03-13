// import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/helpers/defaultPhoto";
import { HouseModel } from "@/models/HouseModel";

const House = ({ house }: { house: HouseModel }) => {
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