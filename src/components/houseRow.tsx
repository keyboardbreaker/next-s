import currencyFormatter from "@/helpers/currencyFormatter";

type House = {
    address: string;
    country: string;
    price: number;
};

const HouseRow = ({ house } : { house: House }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price > 500000 ? "text-primary": ""}`}>{currencyFormatter.format(house.price)}</td>
        </tr>
    );
}

export default HouseRow;