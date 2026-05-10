import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/items")
        .then(res => setItems(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="grid-container">
            {items.map(item => (
                <div className="card" key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemList;