export const PAGES = {
	index: '/',
	examplePage: '/exmple-page',
	examplePageWithParam: (param: string) => `/exmple-page-with/${param}`,
} as const;
