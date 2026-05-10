import React from "react";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <h1 className="title">MERN App</h1>
            <ItemList />
        </div>
    );
}

export default App;