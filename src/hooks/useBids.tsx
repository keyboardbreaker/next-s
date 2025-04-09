import loadingStatus from "@/helpers/loadingStatus";
import { BidModel } from "@/models/BidModel";
import { useEffect, useState } from "react";

const useBids = (houseId: number) => {
    const [bids, setBids] = useState<BidModel[]>([]);
    const [loadingState, setLoadingState] =
        useState(loadingStatus.isLoading);
    
    useEffect(() => {
        const fetchBids = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = 
                    await fetch(`/api/bids/${houseId}`);
                const bids = await response.json();
                setBids(bids);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }
        };
        fetchBids();
    }, [houseId]);

    const postBid = async (bid: BidModel) => {
        const rsp = await fetch(`/api/bids/${bid.houseId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bid),
        });
        return await rsp.json();
    };

    const addBid = async(bid: BidModel) => {
        const postedBid = await postBid(bid);
        setBids([...bids, postedBid]);
    };

    return { bids, loadingState, addBid };
}

export default useBids;