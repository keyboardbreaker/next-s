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
    return { bids, setBids, loadingState};
};

export default useBids;