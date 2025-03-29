import React, { useState } from "react";
import styles from "../styles/itemCard.module.css";
import Icon from "@mdi/react";
import { mdiCartArrowDown } from "@mdi/js";

export default function ItemCard({ item, handleAddToCart }) {
	const [count, setCount] = useState(1);

	function handleSetCount(e) {
		const newCount = +e.target.value;
		setCount(newCount);
	}

	function updateCart() {
		handleAddToCart(count);
	}

	return (
		<div className={styles.itemCard}>
			<img src={item.image} alt="" />
			<h2 className={styles.title}>{item.title}</h2>
			<div>
				<div className={styles.priceBuy}>
					<p>${item.price}</p>
					<input
						type="number"
						name="count"
						id="count"
						value={count}
						size={3}
						onChange={handleSetCount}
					/>
					<button type="button" onClick={updateCart}>
						<Icon path={mdiCartArrowDown} size={1} />
					</button>
				</div>
				<p className={styles.description}>{item.description}</p>
			</div>
		</div>
	);
}
