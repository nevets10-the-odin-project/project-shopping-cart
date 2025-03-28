import React from "react";
import styles from "../styles/navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<div className={styles.nav}>
			<Link to="/">Home</Link>
			<Link to="/shop">Shop</Link>
		</div>
	);
}
