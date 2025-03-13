import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import { HouseModel } from "../models/HouseModel";
import House from "./house";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState<HouseModel | null>();
    return (
        <>
            <Banner />
            {selectedHouse ? 
                <House house={selectedHouse} /> : 
                <HouseList selectHouse={setSelectedHouse} /> 
            }
        </>
    );
};

export default App;