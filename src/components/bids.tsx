import loadingStatus from "@/helpers/loadingStatus";
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

    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    // const onBidSubmitClick = () => {
    //     //add newBid to state and persist to API
    //     startTransition(async() => await addBid(newBid));
    //     setNewBid(emptyBid);
    // };

    const bidSubmitAction = async (formData: FormData) => {
        await addBid({
            houseId: house.id,
            bidder: formData.get("bidder") as string,
            amount: Number(formData.get("amount")) 
        });
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
            <form action={bidSubmitAction} className="row">
                <div className="col-5">
                    <input id="bidder"
                        className="h-100 form-control"
                        type="text"
                        placeholder="Bidder"
                        name="bidder"
                    />
                </div>
                <div className="col-5">
                    <input 
                        id="amount"
                        className="h-100 form-control"
                        type="number"
                        placeholder="Amount"
                        name="amount"
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" type="submit">
                       Add
                    </button>
                </div>
            </form>
        </>
    )
}

export default Bids;