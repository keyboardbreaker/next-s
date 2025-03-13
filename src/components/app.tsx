import { useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    return (
        <>
            <Banner />
            <HouseList />
            {selectedHouse ? 
                <House house={selectedHouse} /> : 
                <HouseList /> 
            }
        </>
    );
};

export default App;