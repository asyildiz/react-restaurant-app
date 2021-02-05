import React from "react";
import RestaurantDetail from "./containers/RestaurantDetail";
import Navbar from "./components/Navbar";
import "./index.scss";

function App() {
    return (
        <>
            <Navbar />
            <RestaurantDetail />
        </>
    );
}

export default App;
