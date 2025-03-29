import React, { useEffect, useState } from "react";
import styles from "../styles/shop.module.css";
import Navigation from "./Navigation";
import ItemCard from "./ItemCard";

export default function Shop() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<>
			<Navigation />
			<div className={styles.itemList}>
				{items.length > 0 &&
					items.map((item) => <ItemCard key={item.id} item={item} />)}
			</div>
		</>
	);
}
