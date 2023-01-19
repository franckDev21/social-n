/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from 'react';
import MenuButton from 'src/components/uikit/MenuButton';
import ProfilAndAuth from 'src/components/layouts/ProfilAndAuth';
import Logo from 'src/components/uikit/Logo';

interface HeaderProps {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<header
			className={`header relative px-4 lg:px-10 flex items-center justify-between dark:bg-secondary dark:text-white bg-white py-4 ${className}`}
		>
			<Logo />

			{/* toggle menu button */}
			<MenuButton open={showMenu} onClick={() => setShowMenu(!showMenu)} />

			{/* mobile navigation */}
			{showMenu && (
				<nav className="absolute shadow-xl dark:shadow-gray-800 z-50 md:hidden px-4 dark:bg-secondary bg-gray-200 w-full py-6 left-0 right-0 top-full">
					<div className="text-lg space-y-3 font-semibold flex flex-col mb-4">
						<a
							href="#"
							className="px-4 py-2 hover:bg-white rounded-md transition text-primary-light bg-white"
						>
							Accueil
						</a>
						<a
							href="#"
							className="px-4 py-2 hover:bg-white dark:hover:text-secondary rounded-md transition"
						>
							Beat-Track
						</a>
						<a
							href="#"
							className="px-4 py-2 hover:bg-white dark:hover:text-secondary rounded-md transition"
						>
							Music&Podcast
						</a>
					</div>

					<ProfilAndAuth className=" text-lg mx-4" />
				</nav>
			)}

			{/* desktop navigation */}
			<nav className="md:flex items-center hidden">
				<div className="space-x-2 lg:space-x-4 lg:text-lg mr-4 font-bold">
					<a href="#" className="transition text-primary-light">
						Accueil
					</a>
					<a href="#" className=" hover:text-primary">
						Beat-Track
					</a>
					<a href="#" className=" hover:text-primary">
						Music&Podcast
					</a>
				</div>

				<ProfilAndAuth />
			</nav>
		</header>
	);
};

export default Header;
