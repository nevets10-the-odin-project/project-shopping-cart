import { Link } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<div className={styles.home}>
				<h1>Home Page</h1>
				<p>
					Welcome to the home page! This project is a part of the React course on{" "}
					<a href="https://www.theodinproject.com/">The Odin Project</a>. The project
					demonstrates the use of concepts in the React ecosystem. Including: React
					Router, fetching data in React, and CSS Module. Visit the{" "}
					<Link to="shop">shop</Link> page for a demonstration!
				</p>
			</div>
		</>
	);
}

export default App;
