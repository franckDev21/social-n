import React, { FC, useContext, useState } from 'react';
import themeContext from 'src/context/themeContext';
import Button from 'src/styles/toggle-theme-button.module.scss';

interface ToggleThemeButtonProps {
	className?: string;
}

const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({ className = '' }) => {
	const { updateTheme } = useContext(themeContext);
	const [theme, setTheme] = useState<string>('light');

	const handleChange = () => {
		window.localStorage.setItem('current-theme', theme);
		updateTheme(theme);
	};

	return (
		<label
			onClick={handleChange}
			htmlFor="button"
			className={`${Button.button} dark:bg-gray-200 w-16 cursor-pointer rounded-full relative h-7 bg-secondary  p-1 flex justify-between items-center ${className}`}
		>
			<span>🌜</span>
			<span>🌞</span>
			<input
				onChange={(e) =>
					e.target.checked ? setTheme('dark') : setTheme('light')
				}
				type="checkbox"
				id="button"
				hidden
				className=" hidden"
			/>
			<span
				className={`w-[23.5px] z-10 h-[23.5px] absolute
       dark:bg-gray-600 bg-gray-200 rounded-full ${Button.round}`}
			></span>
		</label>
	);
};

export default ToggleThemeButton;
