import HouseRow from "./houseRow";
import Button from "./button";
import { HouseModel } from "@/models/HouseModel";
import useHouses from "@/hooks/useHouses";

type HouseListProps = {
    selectHouse : (house: HouseModel) => void;
}

const HouseList = ({selectHouse}: HouseListProps) => {
    const { houses, setHouses} = useHouses(); 
    //destructure setHouses from return { houses, setHouses};
    //from useHouses custom hook

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley",
                country: "USA",
                price: 1000000,
                photo: ""
            }
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
                    ))}
                </tbody>
            </table>
            <Button label="Add House" onClick={addHouse} />
        </>
    );
};

export default HouseList;