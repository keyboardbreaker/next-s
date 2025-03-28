import React, { useEffect, useRef, useState } from "react";
import HouseRow from "./houseRow";
import Button from "./button";
import { HouseModel } from "@/models/HouseModel";

type HouseListProps = {
    selectHouse : (house: HouseModel) => void;
}

const HouseList = ({selectHouse}: HouseListProps) => {
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