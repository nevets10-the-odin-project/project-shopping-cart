import React from "react";
import styles from "../styles/navigation.module.css";
import { Link, useHref } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";

export default function Navigation({ cartCount = 0 }) {
	const href = useHref();

	return (
		<div className={styles.nav}>
			<Link to="/">Home</Link>
			<Link to="/shop">Shop</Link>

			{href.includes("shop") && (
				<Link to="/shop/cart">
					{cartCount}
					<Icon path={mdiCartVariant} title="cart" size={1.4} />
				</Link>
			)}
		</div>
	);
}
