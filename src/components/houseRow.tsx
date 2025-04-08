import currencyFormatter from "@/helpers/currencyFormatter";
import { HouseModel } from "@/models/HouseModel";
import { useNavigate } from "react-router";

type HouseRowProps = {
    house: HouseModel;
}

const HouseRow = ({ house  } : HouseRowProps) => {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`/house/${house.id}`, { state: { house }})}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && //if house.price is falsy it will not evaluate passed the &&
                (<td className={`${house.price > 500000 ? "text-primary": ""}`}>{currencyFormatter.format(house.price)}</td>)}
        </tr>
    );
}

export default HouseRow;