import currencyFormatter from "@/helpers/currencyFormatter";

type House = {
    id: number;
    address: string;
    country: string;
    price: number;
    photo: string;
};

type HouseRowProps = {
    house: House;
    selectHouse: (house: House) => void;
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