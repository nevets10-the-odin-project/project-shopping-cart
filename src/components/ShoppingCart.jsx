import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function ShoppingCart({ cart }) {
	return (
		<div>
			{cart.map((item) => (
				<div key={item.id}>
					{item.title} x{item.count}
				</div>
			))}
		</div>
	);
}
