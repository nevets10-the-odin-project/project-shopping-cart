import React from "react";
import styles from "../styles/cartItemCard.module.css";

export default function CartItemCard({ item }) {
	return (
		<div className={styles.cartItemCard}>
			<img src={item.image} alt="" />
			<div className={styles.details}>
				<h2>{item.title}</h2>
				<p>
					${item.price} x{item.count} = ${item.price * item.count}
				</p>
			</div>
		</div>
	);
}
