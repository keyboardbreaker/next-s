// import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/helpers/defaultPhoto";

type House = {
    id: number;
    address: string;
    country: string;
    price: number;
    photo: string;
};

const House = ({ house }: { house: House }) => {
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