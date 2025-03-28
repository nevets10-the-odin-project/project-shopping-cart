import App from "./App";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "shop",
		element: <Shop />,
		children: [
			{
				path: "cart",
				element: <ShoppingCart />,
			},
		],
	},
];

export default routes;
