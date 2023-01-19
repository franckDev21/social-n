import React from 'react';
import { ThemeContextProps } from 'src/types';

export default React.createContext<ThemeContextProps>({
	theme: '',
	updateTheme: () => {},
});

export const getInitialTheme = (): string => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('current-theme');

		if (typeof storedPrefs === 'string') {
			return storedPrefs;
		}

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}

	return 'light';
};
