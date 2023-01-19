import Image from 'next/image';
import React, { FC } from 'react';
import { AiFillHeart, AiOutlineDown, AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { HiShare } from 'react-icons/hi';
import { IoIosShareAlt } from 'react-icons/io';
import { SlEmotsmile } from 'react-icons/sl';
import ProfilPicture from './ProfilPicture';
import PostComment from './PostComment';

interface PostCardProps {
	className?: string;
}

const PostCard: FC<PostCardProps> = ({ className = '' }) => {
	return (
		<div
			className={`${className} p-4 bg-white dark:bg-secondary py-2 rounded-sm  border dark:border-transparent md:w-[80%] mx-auto`}
		>
			<header className="mb-3 flex justify-between items-start">
				<ProfilPicture username="Kris M" forPost />
				<button className="border-4 px-3 py-1 font-bold text-sm border-primary-light text-primary-light">
					S'abonner
				</button>
			</header>
			<p className="mb-3">
				You don't expect to see this when at an airport… #ladbible #fyp
				#foryoupage #airportlife #airports #airportsecurity original sound -
				LADbible
			</p>
			<div className="relative flex flex-col overflow-hidden rounded-sm text-secondary font-bold text-sm">
				<Image
					className="  w-full h-full object-cover"
					src="https://source.unsplash.com/random"
					width={100}
					height={100}
					alt="image"
				/>
				<div className="p-2 bg-slate-100">
					<div className="flex items-center py-2 bg-slate-100 px-6">
						<div className="w-1/3 flex space-x-1">
							<span>
								<AiFillHeart className="text-2xl text-primary-light" />
							</span>
							<span>10 K</span>
						</div>
						<div className="w-1/3 flex space-x-1">
							<span>
								<FaRegCommentDots className="text-2xl text-primary-light" />
							</span>
							<span>540</span>
						</div>
						<div className="w-1/3 flex space-x-1">
							<span>
								<IoIosShareAlt className="text-2xl text-primary-light" />
							</span>
							<span>20</span>
						</div>
					</div>
					<span className="w-[90%] mx-auto block h-0.5 bg-slate-200"></span>
					<div className="flex items-center justify-end space-x-4 py-2 bg-slate-100 px-6">
						<div className="flex space-x-1">
							<span>
								<AiOutlineHeart className="text-2xl text-primary-light" />
							</span>
							<span>J'aime</span>
						</div>
						<div className="flex space-x-1">
							<span>
								<HiShare className="text-2xl text-primary-light" />
							</span>
							<span>Partager</span>
						</div>
					</div>
				</div>

				<form className=" w-full overflow-auto rounded-full mt-5 relative">
					<input
						className="py-2.5 px-6 outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 bg-slate-200 w-full"
						type="text"
						placeholder="Ajouter un commentaire ..."
					/>
					<SlEmotsmile className="absolute cursor-pointer text-3xl text-gray-500 right-3 top-1/2 -translate-y-1/2" />
				</form>

				<PostComment />
				<PostComment />
				<PostComment isResponse />

				<div className="text-center py-3 text-gray-400 space-x-2 flex items-center justify-center cursor-pointer">
					<span>Voir plus de réponses (23)</span>
					<AiOutlineDown />
				</div>
			</div>
		</div>
	);
};

export default PostCard;
