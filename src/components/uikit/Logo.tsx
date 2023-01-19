import Image from 'next/image';
import React, { FC } from 'react';

interface LogoProps {
	className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
	return (
		<div
			className={`header__logo text-xl sm:text-2xl lg:text-3xl flex items-center  space-x-1 font-bold ${className}`}
		>
			<Image
				src="/logo.png"
				className="rounded-md"
				alt="logo"
				width={30}
				height={30}
			/>
			<span>
				<span>Bantou</span>
				<span className="text-primary-light">Beat</span>
			</span>
		</div>
	);
};

export default Logo;
