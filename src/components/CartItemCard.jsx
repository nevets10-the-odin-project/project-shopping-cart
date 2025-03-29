import React from "react";
import styles from "../styles/cartItemCard.module.css";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

export default function CartItemCard({ item, deleteItem }) {
	return (
		<div className={styles.cartItemCard}>
			<img src={item.image} alt="" />
			<div className={styles.details}>
				<h2>{item.title}</h2>
				<p>
					${item.price} x{item.count} = ${item.price * item.count}
				</p>
				<button type="button" onClick={() => deleteItem(item.id)}>
					<Icon path={mdiTrashCanOutline} size={1} />
				</button>
			</div>
		</div>
	);
}
