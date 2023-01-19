/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { MdNotificationsActive } from 'react-icons/md';
import Image from 'next/image';
import ToggleThemeButton from 'src/components/uikit/ToggleThemeButton';

interface ProfilAndAuthProps {
	className?: string;
}

const ProfilAndAuth: FC<ProfilAndAuthProps> = ({ className = '' }) => {
	return (
		<div
			className={`flex items-center space-x-2 lg:space-x-4 lg:text-lg ${className}`}
		>
			<ToggleThemeButton />

			<a href="#">S'inscrire</a>
			<a
				href="#"
				className="px-4 py-2 dark:text-secondary rounded-md bg-gray-100"
			>
				Connexion
			</a>

			<span className="cursor-pointer text-gray-500 hover:text-gray-800">
				<MdNotificationsActive className="text-3xl" />{' '}
			</span>
			<span className="w-11 h-11 cursor-pointer hover:border-primary-light hover:border-opacity-70 hover:shadow-md border-4 border-transparent rounded-full bg-slate-100 overflow-hidden relative">
				<Image
					className=" absolute w-full h-full object-cover"
					width={20}
					height={20}
					src="/assets/img/default-profil-5.jpg"
					alt="photo de profil"
				/>
			</span>
		</div>
	);
};

export default ProfilAndAuth;
