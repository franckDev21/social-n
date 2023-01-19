import Image from 'next/image';
import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiBadgeCheck } from 'react-icons/hi';

interface ProfilPictureProps {
	className?: string;
	forPost?: boolean;
	username?: string;
}

const ProfilPicture: FC<ProfilPictureProps> = ({
	className = '',
	forPost = false,
	username = 'MIA',
}) => {
	return (
		<div
			className={`flex ${
				forPost ? 'items-start' : 'items-center'
			} space-x-1 text-3xl ${className}`}
		>
			<span className="w-16 h-16 block cursor-pointer hover:border-primary-light  border-transparent rounded-full bg-slate-100 overflow-hidden relative">
				<Image
					className=" absolute w-full h-full object-cover"
					width={64}
					height={64}
					src="/assets/img/default-profil-6.jpg"
					alt="photo de profil"
				/>
			</span>
			<div
				className={`flex items-center justify-start ${forPost && 'space-x-2'}`}
			>
				<AiFillStar className="text-lg translate-y-0.5 text-primary-light" />
				<span className={`font-bold  ${forPost ? 'text-sm' : 'text-4xl'}`}>
					{username}
				</span>
				<HiBadgeCheck height={50} className="text-[#0275d8]" />
			</div>
		</div>
	);
};

export default ProfilPicture;
