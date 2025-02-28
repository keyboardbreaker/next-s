import React from "react";

const houses = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
    },
    {
        id: 2,
        address: "89 road of forks, Geneva",
        country: "Switzerland",
        price: 500000,
    },
];

const HouseList = () => {
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
                    {houses.map((house) => (
                        <tr key={house.id}>
                            <td>{house.address}</td>
                            <td>{house.country}</td>
                            <td>{house.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default HouseList;