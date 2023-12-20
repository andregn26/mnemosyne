import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
	title: "Promptopia",
	description: "Discover and share AI prompts",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className="font-grotesk bg-violent-violet-950 text-violent-violet-50">
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
