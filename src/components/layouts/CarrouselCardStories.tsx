import React, { FC } from 'react';
import CardCarrouselItem from './CardCarrouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

interface CarrouselCardStoriesProps {
	className?: string;
}

const CarrouselCardStories: FC<CarrouselCardStoriesProps> = ({
	className = '',
}) => {
	return (
		<div
			className={`flex space-x-7 justify-start px-3 md:px-0 md:w-[80%] mx-auto ${className}`}
		>
			<Swiper
				freeMode
				// grabCursor
				navigation
				modules={[FreeMode, Navigation]}
				spaceBetween={25}
				slidesPerView={3}
				className="w-full"
			>
				<SwiperSlide>
					<CardCarrouselItem pathImg="/assets/img/default-profil-9.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CardCarrouselItem pathImg="/assets/img/default-profil-10.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CardCarrouselItem pathImg="/assets/img/default-profil-11.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CardCarrouselItem pathImg="https://source.unsplash.com/random" />
				</SwiperSlide>
				<SwiperSlide>
					<CardCarrouselItem pathImg="/assets/img/default-profil-8.webp" />
				</SwiperSlide>
				<SwiperSlide>
					<CardCarrouselItem pathImg="/assets/img/default-profil-11.jpg" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default CarrouselCardStories;
