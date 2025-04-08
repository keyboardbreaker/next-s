import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import { HouseModel } from "../models/HouseModel";
import House from "./house";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState<HouseModel | null>();
    const setSelectedHouseWrapper = (house: HouseModel) => {
        setSelectedHouse(house);
    };

    return (
        <>
            <ErrorBoundary fallback="Something went wrong!">
                <Banner />
                {selectedHouse ? 
                    <House house={selectedHouse} /> : 
                    <HouseList selectHouse={setSelectedHouseWrapper} />
                }
            </ErrorBoundary>
        </>
    );
};

export default App;