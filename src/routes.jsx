import App from "./App";
import Shopping from "./components/Shopping";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "shopping",
		element: <Shopping />,
		children: [
			{
				path: "cart",
				element: <ShoppingCart />,
			},
		],
	},
];

export default routes;
