import React, { FC } from 'react';
import { HiMenu } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';

interface MenuButtonProps {
	className?: string;
	onClick?: () => void;
	open?: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({
	className = '',
	onClick = () => {},
	open = false,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${className} 
      text-2xl flex items-center justify-center 
      p-2 bg-gray-100 rounded-md text-gray-700 md:hidden`}
		>
			{!open ? <HiMenu /> : <TiTimes />}
		</button>
	);
};

export default MenuButton;
