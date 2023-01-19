export * from './models';

// for the theme of the site
export interface ThemeContextProps {
	theme: string;
	updateTheme: (name: string) => any;
}
