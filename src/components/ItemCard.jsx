import React from "react";
import styles from "../styles/itemCard.module.css";

export default function ItemCard({ item }) {
	return (
		<div className={styles.itemCard}>
			<img src={item.image} alt="" />
			<h2>{item.title}</h2>
			<p>{item.category}</p>
			<p>{item.price}</p>
			<p>{item.description}</p>
		</div>
	);
}
