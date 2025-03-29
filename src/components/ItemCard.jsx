import React from "react";
import styles from "../styles/itemCard.module.css";
import Icon from "@mdi/react";
import { mdiCartArrowDown } from "@mdi/js";

export default function ItemCard({ item, handleAddToCart }) {
	return (
		<div className={styles.itemCard}>
			<img src={item.image} alt="" />
			<h2 className={styles.title}>{item.title}</h2>
			<div>
				<div className={styles.priceBuy}>
					<p>${item.price}</p>
					<button type="button" onClick={handleAddToCart}>
						<Icon path={mdiCartArrowDown} size={1} />
					</button>
				</div>
				<p className={styles.description}>{item.description}</p>
			</div>
		</div>
	);
}
