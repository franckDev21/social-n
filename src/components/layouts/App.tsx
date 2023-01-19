import React, { FC, ReactNode, useState } from 'react';
import Header from 'src/components/layouts/Header';
import ThemeContext, { getInitialTheme } from 'src/context/themeContext';
import { ThemeContextProps } from 'src/types';
import Footer from 'src/components/layouts/Footer';
import SearchBlock from './SearchBlock';

interface AppProps {
	className?: string;
	children?: ReactNode;
}

const App: FC<AppProps> = ({ className = '', children }) => {
	const [theme, setTheme] = useState(
		getInitialTheme() === 'light' ? 'dark' : getInitialTheme
	);

	const contextValue: ThemeContextProps = {
		theme,
		updateTheme: (name) => {
			setTheme(name);
		},
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div
				className={`${className} ${theme} layout min-h-screen w-full bg-gray-200 `}
			>
				<Header />
				<SearchBlock className="my-1" />
				{children}
				<Footer className="mt-2" />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
