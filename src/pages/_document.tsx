import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="theme-color" content="#D8B138" />
				<meta name="application-name" content="Bantubeat" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Bantubeat" />
				<meta name="description" content="Bantubeat" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#D8B138" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="keywords" content="Bantubeat, beat" />

				<link rel="manifest" href="/manifest.json" />
				<link href="/favicon.ico" rel="icon" type="image/ico" sizes="16x16" />
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
