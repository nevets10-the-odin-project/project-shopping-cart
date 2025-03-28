import React from "react";
import styles from "../styles/navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<div className={styles.nav}>
			<Link to="/">Home</Link>
			<Link to="/shopping">Shopping</Link>
			<Link to="/shopping-cart">Shopping Cart</Link>
		</div>
	);
}
