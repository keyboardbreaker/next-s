import { HouseModel } from "@/models/HouseModel";
import { useEffect, useRef, useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState<HouseModel[]>([]);
    const counter = useRef(0);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        };
        fetchHouses();
        counter.current++;
    }, []); //empty dependency array
    //houseArray is initial value
    //the first element in array is an object that reflects the current state
    //the second is a function we can use to change the state
    //the function is expected to be prefixed set

    return { houses, setHouses};
};

export default useHouses;