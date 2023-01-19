import React, { FC } from 'react';
import PostCard from './PostCard';

interface PostContentProps {
	className?: string;
}

const PostContent: FC<PostContentProps> = ({ className = '' }) => {
	return (
		<div className={`${className} pt-5`}>
			<PostCard />
			<PostCard className="mt-4" />
		</div>
	);
};

export default PostContent;
