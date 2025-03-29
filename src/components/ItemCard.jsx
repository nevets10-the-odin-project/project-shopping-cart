import React from "react";
import styles from "../styles/itemCard.module.css";

export default function ItemCard({ item }) {
	return (
		<div className={styles.itemCard}>
			<img src={item.image} alt="" />
			<h2 className={styles.title}>{item.title}</h2>
			<div>
				<p>${item.price}</p>
				<p className={styles.description}>{item.description}</p>
			</div>
		</div>
	);
}
