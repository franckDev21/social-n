import Image from 'next/image';
import React, { FC } from 'react';

interface FeaturedArtistProps {
	className?: string;
}

const FeaturedArtist: FC<FeaturedArtistProps> = ({ className = '' }) => {
	return (
		<div className={`${className} dark:bg-[#6766662d] py-3 rounded-md`}>
			<h2 className="text-lg font-bold  text-center pb-2 dark:text-[#676666]">
				Artiste en Vedette
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
					<div className="flex flex-col justify-center items-center">
						<h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">
							C-Beat
						</h3>
						<p className="text-xs opacity-80">Cameroun</p>
					</div>
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
					<div className="flex flex-col justify-center items-center">
						<h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">
							kools
						</h3>
						<p className="text-xs opacity-80">Gabon</p>
					</div>
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
					<div className="flex flex-col justify-center items-center">
						<h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">
							Raz beatz
						</h3>
						<p className="text-xs opacity-80">Congo</p>
					</div>
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
					<div className="flex flex-col justify-center items-center">
						<h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">
							Mbolè
						</h3>
						<p className="text-xs opacity-80">Cameroun</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedArtist;
