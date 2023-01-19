import React, { FC } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { TbWorldUpload } from 'react-icons/tb';
import { BsFillCameraReelsFill } from 'react-icons/bs';

interface PublicationCardProps {
	className?: string;
}

const PublicationCard: FC<PublicationCardProps> = ({ className = '' }) => {
	return (
		<div
			className={`${className} bg-white dark:bg-slate-100 rounded-2xl md:rounded-[40px] overflow-hidden border md:w-[80%] mx-auto`}
		>
			<h2 className="text-2xl md:text-3xl text-gray-500 py-2 text-center font-semibold">
				créer une publication
			</h2>
			<span className="w-full h-2 block my-2 bg-slate-200"></span>

			<div className="px-6 md:px-14 pb-2 flex justify-between space-x-4 items-center">
				<div className="flex flex-col justify-center items-center cursor-pointer">
					<span>
						<BsFillCameraReelsFill className="text-3xl md:text-6xl text-primary-light" />
					</span>
					<span className="font-bold text-gray-500 text-base md:text-lg">
						Direct
					</span>
				</div>
				<div className="flex flex-col justify-center items-center cursor-pointer">
					<span>
						<FaPhotoVideo className="text-3xl md:text-6xl text-primary-light" />
					</span>
					<span className="font-bold text-gray-500 text-base md:text-lg">
						Photo/Vidéo
					</span>
				</div>
				<div className="flex flex-col justify-center items-center cursor-pointer">
					<span>
						<TbWorldUpload className="text-3xl md:text-6xl text-primary-light" />
					</span>
					<span className="font-bold text-gray-500 text-base md:text-lg">
						Actualités
					</span>
				</div>
			</div>
		</div>
	);
};

export default PublicationCard;
