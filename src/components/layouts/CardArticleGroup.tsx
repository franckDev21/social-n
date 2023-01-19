import Image from 'next/image';
import React, { FC } from 'react';

interface CardArticleGroupProps {
	className?: string;
	title?: string;
	oneTitle?: boolean;
}

const CardArticleGroup: FC<CardArticleGroupProps> = ({
	className = '',
	title = '',
	oneTitle = false,
}) => {
	return (
		<div className={`${className} dark:bg-[#6766662d] py-3 px-4 rounded-md`}>
			<h2 className="text-lg font-bold  text-center pt-3 pb-2 dark:text-[#676666]">
				{title}
			</h2>

			<div className="grid grid-cols-2 gap-3">
				{[1, 2, 3, 4].map((value) => (
					<div key={value}>
						<span className="relative block w-full h-20">
							<Image
								className=" absolute w-full h-full object-cover"
								src="https://source.unsplash.com/random"
								width={100}
								height={100}
								alt="image"
							/>
						</span>
						<div className="flex text-sm justify-center items-center flex-col">
							<h2 className={`${oneTitle && 'font-bold'}`}>Eklo trap super</h2>
							{!oneTitle && <p className="font-bold">DJ KESSY</p>}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardArticleGroup;
