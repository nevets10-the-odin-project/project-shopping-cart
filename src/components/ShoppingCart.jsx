import React from "react";
import CartItemCard from "./CartItemCard";
import styles from "../styles/cart.module.css";

export default function ShoppingCart({ cart }) {
	return (
		<div className={styles.cart}>
			{cart.map((item) => (
				<CartItemCard key={item.id} item={item} />
			))}
		</div>
	);
}
