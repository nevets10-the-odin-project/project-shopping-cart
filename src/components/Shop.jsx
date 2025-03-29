import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ItemCard from "./ItemCard";

export default function Shop() {
	const [items, setItems] = useState([]);

	console.log(items);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<>
			<Navigation />
			<h1>Shop</h1>
			{items.length > 0 &&
				items.map((item) => <ItemCard key={item.id} item={item} />)}
		</>
	);
}
