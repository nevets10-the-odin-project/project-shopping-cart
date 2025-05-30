import React from "react";
import CartItemCard from "./CartItemCard";
import styles from "../styles/cart.module.css";

export default function ShoppingCart({ cart, deleteItem }) {
	const total = cart.reduce((acc, item) => (acc += item.price * item.count), 0);
	return (
		<div className={styles.cart}>
			{cart.map((item) => (
				<CartItemCard key={item.id} item={item} deleteItem={deleteItem} />
			))}
			<p className={styles.total}>Total: ${total}</p>
		</div>
	);
}
