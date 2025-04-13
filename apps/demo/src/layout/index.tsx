import "@/styles/styles.css";

export const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<head>
				<title>Brisa UI</title>
				<link rel="icon" href="brisa.svg" />
			</head>
			<body>{children}</body>
		</html>
	);
};

export default Layout;
