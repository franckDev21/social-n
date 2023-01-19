import React, { FC } from 'react';
import { BsSpeakerFill } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { ImHeadphones } from 'react-icons/im';
import { RiPlayList2Fill } from 'react-icons/ri';
import { VscPlayCircle } from 'react-icons/vsc';

interface HomePageNavigationProps {
	className?: string;
}

const HomePageNavigation: FC<HomePageNavigationProps> = ({
	className = '',
}) => {
	return (
		<nav className={`${className} pt-10 space-y-3`}>
			<div className="flex items-center space-x-5 font-bold px-2 py-1 hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-50 bg-opacity-10 rounded-md cursor-pointer transition hover:text-secondary">
				<span>
					<BsSpeakerFill className="text-primary-light text-4xl" />
				</span>
				<span>Mes Beats</span>
			</div>
			<div className="flex items-center space-x-4 font-bold px-2 py-1 hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-50 bg-opacity-10 rounded-md cursor-pointer transition hover:text-secondary">
				<span>
					<ImHeadphones className="text-primary-light text-3xl" />
				</span>
				<span className="pl-1">Mes Music&Podcast</span>
			</div>
			<div className="flex items-center space-x-4 font-bold px-2 py-1 hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-50 bg-opacity-10 rounded-md cursor-pointer transition hover:text-secondary">
				<span>
					<RiPlayList2Fill className="text-primary-light text-4xl" />
				</span>
				<span>Mes Playlists</span>
			</div>
			<div className="flex items-center space-x-4 font-bold px-2 py-1 hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-50 bg-opacity-10 rounded-md cursor-pointer transition hover:text-secondary">
				<span>
					<VscPlayCircle className="text-primary-light text-4xl" />
				</span>
				<span>Mes Vidéos</span>
			</div>
			<div className="flex items-center space-x-4 font-bold px-2 py-1 hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-50 bg-opacity-10 rounded-md cursor-pointer transition hover:text-secondary">
				<span>
					<GiReceiveMoney className="text-primary-light text-4xl" />
				</span>
				<span>Ma Balance</span>
			</div>
		</nav>
	);
};

export default HomePageNavigation;
