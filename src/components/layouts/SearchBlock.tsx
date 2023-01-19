import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBlockProps {
	className?: string;
}

const SearchBlock: FC<SearchBlockProps> = ({ className = '' }) => {
	return (
		<div
			className={`dark:bg-secondary dark:border-t border-[#3f3f3f7d] py-2 dark:text-white bg-white ${className}`}
		>
			<div className="container mx-auto">
				<form className="mx-4 md:mx-0 md:max-w-xs text-secondary overflow-hidden relative border rounded-md">
					<AiOutlineSearch className=" left-2 text-xl absolute top-1/2 -translate-y-1/2" />
					<input
						type="text"
						className=" px-4 py-2 pl-10 pb-2.5 font-semibold w-full outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 "
						placeholder="Rechercher sur bantoubeat"
					/>
				</form>
			</div>
		</div>
	);
};

export default SearchBlock;
