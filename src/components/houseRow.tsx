import currencyFormatter from "@/helpers/currencyFormatter";
import { HouseModel } from "@/models/HouseModel";

type HouseRowProps = {
    house: HouseModel;
    selectHouse: (house: HouseModel) => void;
}

const HouseRow = ({ house, selectHouse } : HouseRowProps) => {
    return (
        <tr onClick={() => {selectHouse(house)}}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && //if house.price is falsy it will not evaluate passed the &&
                (<td className={`${house.price > 500000 ? "text-primary": ""}`}>{currencyFormatter.format(house.price)}</td>)}
        </tr>
    );
}

export default HouseRow;