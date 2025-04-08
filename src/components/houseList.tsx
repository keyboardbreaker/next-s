import HouseRow from "./houseRow";
import Button from "./button";
import { HouseModel } from "@/models/HouseModel";
import useHouses from "@/hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "@/helpers/loadingStatus";
import ErrorBoundary from "./ErrorBoundary";

type HouseListProps = {
    selectHouse : (house: HouseModel) => void;
}

const HouseList = ({selectHouse}: HouseListProps) => {
    const { houses, setHouses, loadingState} = useHouses(); 
    //destructure setHouses from return { houses, setHouses};
    //from useHouses custom hook

    if(loadingState !==  loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }

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
                    <ErrorBoundary fallback="Error loading house rows!">
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
                    ))}
                    </ErrorBoundary>
                </tbody>
            </table>
            <Button label="Add House" onClick={addHouse} />
        </>
    );
};

export default HouseList;