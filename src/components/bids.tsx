import loadingStatus from "@/helpers/loadingStatus";
import { useState, useTransition } from "react";
import LoadingIndicator from "./loadingIndicator";
import currencyFormatter from "@/helpers/currencyFormatter";
import { BidModel } from "@/models/BidModel";
import useBids from "@/hooks/useBids";
import { HouseModel } from "@/models/HouseModel";

type BidsProps = {
    house: HouseModel;//house: {id: number; name: string; ...}
};

const Bids = ({house}: BidsProps) => { // (props: BidsProps); 
                                        //const house = props.house
    const { bids, loadingState, addBid } = useBids(house.id);
    const [ isPending, startTransition] = useTransition();
    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0
    };

    const [newBid, setNewBid] = useState(emptyBid);

    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    const onBidSubmitClick = () => {
        //add newBid to state and persist to API
        startTransition(async() => await addBid(newBid));
        setNewBid(emptyBid);
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Bidder</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((b: BidModel) => (
                                <tr key={b.houseId}>
                                    <td>{b.bidder}</td>
                                    <td>{currencyFormatter.format(b.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <input id="bidder"
                        className="h-100 form-control"
                        type="text"
                        value={newBid.bidder}
                        onChange={(e) => setNewBid({
                            ...newBid,
                            bidder: e.target.value
                        })}
                        placeholder="Bidder" 
                    />
                </div>
                <div className="col-5">
                    <input 
                        id="amount"
                        className="h-100 form-control"
                        type="number"
                        value={newBid.amount}
                        onChange={(e) => setNewBid({
                            ...newBid,
                            amount: parseInt(e.target.value)
                        })}
                        placeholder="Amount"
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" disabled={isPending} onClick={onBidSubmitClick}>
                       Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default Bids;