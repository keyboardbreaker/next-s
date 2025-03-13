import { useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState<House | null>();
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