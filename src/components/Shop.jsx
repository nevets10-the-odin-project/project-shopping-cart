import React, { useEffect, useState } from "react";
import styles from "../styles/shop.module.css";
import Navigation from "./Navigation";
import ItemCard from "./ItemCard";
import ShoppingCart from "./ShoppingCart";
import { useHref } from "react-router-dom";

export default function Shop() {
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([]);
	const href = useHref();

	function handleAddToCart(item) {
		const existingItem = cart.find((cartItem) => cartItem.id === item.id);
		console.log(existingItem);
		if (existingItem) return;

		const newCart = [...cart, item];
		setCart(newCart);
	}

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<>
			<Navigation cartCount={cart.length} />
			{href.includes("cart") ? (
				<ShoppingCart cart={cart} />
			) : (
				<div className={styles.itemList}>
					{items.length > 0 &&
						items.map((item) => (
							<ItemCard
								key={item.id}
								item={item}
								handleAddToCart={(count) => handleAddToCart({ ...item, count })}
							/>
						))}
				</div>
			)}
		</>
	);
}
