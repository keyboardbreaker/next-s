import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";

const App = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // This runs only on the client side
    }, []);
  
    if (!isClient) {
      return null; // Render nothing or a loading spinner while waiting for client-side hydration
    }
    return (
        <BrowserRouter>
            <ErrorBoundary fallback="Something went wrong!">
                <Banner />
                <Routes>
                    <Route index element={ <HouseList/> } /> 
                    <Route path="house/:id" element={ <House /> }/>
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>

    );
};

export default App;