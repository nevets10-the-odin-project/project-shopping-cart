import App from "./App";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "shopping-cart",
		element: <ShoppingCart />,
	},
];

export default routes;
