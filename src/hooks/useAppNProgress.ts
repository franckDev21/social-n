import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect, useRef } from 'react';

interface UseAppNProgressProps {
	/**
	 * The start position of the bar.
	 * @default 0.3
	 */
	startPosition?: number;
	/**
	 * The stop delay in milliseconds.
	 * @default 200
	 */
	stopDelayMs?: number;
	/**
	 * Whether to show the bar on shallow routes.
	 * @default true
	 */
	showOnShallow?: boolean;
	/**
	 * The other NProgress configuration options to pass to NProgress.
	 * @default null
	 */
	options?: Partial<NProgress.NProgressOptions>;
}

interface IShallow {
	shallow: boolean;
}

type RouterEventHandler = (_: string, __: IShallow) => void;
type RouterErrorHandler = (_err: Error, _: string, __: IShallow) => void;

export const useAppNProgress = (param?: UseAppNProgressProps) => {
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const {
			startPosition = 0.3,
			stopDelayMs = 200,
			showOnShallow = true,
			options,
		} = param || {};

		const routeChangeStart: RouterEventHandler = (_, { shallow }) => {
			if (!shallow || showOnShallow) {
				NProgress.set(startPosition);
				NProgress.start();
			}
		};

		const routeChangeEnd: RouterEventHandler = (_, { shallow }) => {
			if (!shallow || showOnShallow) {
				if (timerRef.current) clearTimeout(timerRef.current);
				timerRef.current = setTimeout(() => {
					NProgress.done(true);
				}, stopDelayMs);
			}
		};

		const routeChangeError: RouterErrorHandler = (_err, _url, { shallow }) => {
			if (!shallow || showOnShallow) {
				if (timerRef.current) clearTimeout(timerRef.current);
				timerRef.current = setTimeout(() => {
					NProgress.done(true);
				}, stopDelayMs);
			}
		};

		if (options) {
			NProgress.configure(options);
		}

		Router.events.on('routeChangeStart', routeChangeStart);
		Router.events.on('routeChangeComplete', routeChangeEnd);
		Router.events.on('routeChangeError', routeChangeError);
		return () => {
			Router.events.off('routeChangeStart', routeChangeStart);
			Router.events.off('routeChangeComplete', routeChangeEnd);
			Router.events.off('routeChangeError', routeChangeError);
		};
	}, [param]);
};
