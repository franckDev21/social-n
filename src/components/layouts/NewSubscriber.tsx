import Image from 'next/image';
import React, { FC } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface NewSubscriberProps {
	className?: string;
}

const NewSubscriber: FC<NewSubscriberProps> = ({ className = '' }) => {
	return (
		<div className={`${className} dark:bg-[#6766662d] py-3 rounded-md`}>
			<h2 className="text-lg font-bold  text-center pb-2 dark:text-[#676666]">
				Nouveaux Abonnés
			</h2>
			<div className="space-x-3 flex justify-center mx-auto">
				<div className="flex flex-col justify-center items-center">
					<span className="w-14 block relative h-14 rounded-full overflow-hidden">
						<Image
							className=" absolute w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							width={100}
							height={100}
							alt="image"
						/>
					</span>
					<h3 className="font-bold my-1 text-gray-700 dark:text-gray-300">
						Miscs
					</h3>
				</div>
				<div className="flex flex-col justify-center items-center">
					<span className="w-14 block relative h-14 rounded-full overflow-hidden">
						<Image
							className=" absolute w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							width={100}
							height={100}
							alt="image"
						/>
					</span>
					<h3 className="font-bold my-1 text-gray-700 dark:text-gray-300">
						Miscs
					</h3>
				</div>
				<div className="flex flex-col justify-center items-center">
					<span className="w-14 block relative h-14 rounded-full overflow-hidden">
						<Image
							className=" absolute w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							width={100}
							height={100}
							alt="image"
						/>
					</span>
					<h3 className="font-bold my-1 text-gray-700 dark:text-gray-300">
						Claire
					</h3>
				</div>
				<div className="flex flex-col justify-center items-center">
					<span className="w-14 block relative h-14 rounded-full overflow-hidden">
						<Image
							className=" absolute w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							width={100}
							height={100}
							alt="image"
						/>
					</span>
					<h3 className="font-bold my-1 text-gray-700 dark:text-gray-300">
						Julio
					</h3>
				</div>
			</div>
			<h2 className="text-xl cursor-pointer text-primary-light mt-3 justify-center font-bold text-center flex items-center space-x-2">
				<AiOutlinePlusCircle className="text-2xl" />
				<span>Voir plus</span>
			</h2>
		</div>
	);
};

export default NewSubscriber;
