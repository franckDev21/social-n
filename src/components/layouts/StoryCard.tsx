import React, { FC } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { BiMoviePlay } from 'react-icons/bi';
import { BsRecord } from 'react-icons/bs';
import CarrouselCardStories from './CarrouselCardStories';

interface StoryCardProps {
	className?: string;
}

const StoryCard: FC<StoryCardProps> = ({ className = '' }) => {
	return (
		<div
			className={`${className} bg-white dark:bg-slate-100 py-2 rounded-2xl md:rounded-3xl overflow-hidden border md:w-[80%] mx-auto`}
		>
			<div>
				<div className="px-6 md:px-14 pb-2 flex justify-between space-x-4 items-center">
					<div className="flex flex-col justify-center items-center cursor-pointer">
						<span>
							<HiBookOpen className="text-3xl text-primary-light" />
						</span>
						<span className="font-bold text-gray-500 text-lg">Stories</span>
					</div>
					<div className="flex flex-col justify-center items-center cursor-pointer">
						<span>
							<BiMoviePlay className="text-3xl text-primary-light" />
						</span>
						<span className="font-bold text-gray-500 text-lg">Reels</span>
					</div>
					<div className="flex flex-col justify-center items-center cursor-pointer">
						<span className=" inline-flex items-center space-x-2 font-bold text-gray-500 px-2 py-1 rounded-md border border-gray-300 uppercase">
							<BsRecord className="text-3xl text-primary-light" />{' '}
							<span className="text-xl">REC</span>
						</span>
						<span className="font-bold text-gray-500 text-lg">Studios</span>
					</div>
				</div>

				<span className="w-[80%] mx-auto rounded-md h-2 block my-2 bg-slate-200"></span>

				<CarrouselCardStories />
			</div>
		</div>
	);
};

export default StoryCard;
