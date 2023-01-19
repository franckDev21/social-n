import Image from 'next/image';
import React, { FC } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Style from 'src/styles/card-carrousel-item.module.scss';

interface CardCarrouselItemProps {
	className?: string;
	pathImg?: string;
	onClick?: () => void;
}

const CardCarrouselItem: FC<CardCarrouselItemProps> = ({
	className = '',
	pathImg = '',
	onClick = () => {},
}) => {
	return (
		<div
			onClick={onClick}
			className={`${Style.card} relative  cursor-pointer h-[150px] rounded-md flex-none bg-gray-200 overflow-hidden ${className}`}
		>
			<Image
				width={300}
				className="absolute w-full h-full object-cover"
				height={300}
				src={pathImg}
				alt="image"
			/>
			<span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
				<BsFillPlusCircleFill className="text-4xl text-primary-light" />
			</span>
		</div>
	);
};

export default CardCarrouselItem;
