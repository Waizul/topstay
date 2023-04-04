import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
	title: "Top Stay",
	description: "Top Stay great app for renting and buying a property",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
