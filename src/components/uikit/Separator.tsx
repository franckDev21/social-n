import React, { FC } from 'react';

interface SeparatorProps {
	className?: string;
}

const Separator: FC<SeparatorProps> = ({ className = '' }) => {
	return (
		<div
			className={`w-full h-0.5 bg-white dark:bg-[#3f3f3f7d] ${className}`}
		></div>
	);
};

export default Separator;
