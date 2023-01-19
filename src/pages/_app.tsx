import 'src/styles/globals.scss';
import 'src/styles/nprogress.css';
import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useAppNProgress } from 'src/hooks/useAppNProgress';

const BantuBeatApp: FC<AppProps> = ({ Component, pageProps }) => {
	useAppNProgress();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
				/>
				<title>Bantubeat</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default BantuBeatApp;
