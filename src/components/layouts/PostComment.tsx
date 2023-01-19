import Image from 'next/image';
import React, { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';

interface PostCommentPost {
	className?: string;
	isResponse?: boolean;
}

const PostComment: FC<PostCommentPost> = ({
	className = '',
	isResponse = false,
}) => {
	return (
		<div
			className={`${className} pb-6 ${
				!isResponse ? 'pt-4 border-t mt-4 dark:border-[#3f3f3f7d]' : 'ml-12'
			} space-y-3 dark:text-white`}
		>
			<div className="flex space-x-3">
				<span
					className={`flex-none relative block rounded-full overflow-hidden ${
						isResponse ? 'w-8 h-8' : 'w-12 h-12'
					}`}
				>
					<Image
						className="absolute w-full h-full object-cover"
						src="https://source.unsplash.com/random"
						width={100}
						height={100}
						alt="image"
					/>
				</span>
				<div className="space-y-2">
					<h2 className={`font-bold ${isResponse ? 'text-base' : 'text-lg'}`}>
						Locko
					</h2>
					<p className={`font-normal w-[98%] ${isResponse && 'text-sm'}`}>
						Ajouter des lignes dans le corps du texte gegekeeon Lorem ipsum
						dolor sit amet consectetur.
					</p>
				</div>
				<span className="text-xs flex flex-col justify-start items-center">
					<span>
						<AiFillHeart className="text-lg text-primary-light" />
					</span>
					<span>25</span>
				</span>
			</div>
			{!isResponse && (
				<div className="space-x-2 ml-4 text-gray-400 flex items-center">
					<span>Il y a 4J</span>
					<span className="h-4 w-[1px] bg-gray-400 inline-block"></span>
					<span className=" cursor-pointer text-primary-light hover:underline">
						Répondre
					</span>
				</div>
			)}
		</div>
	);
};

export default PostComment;
