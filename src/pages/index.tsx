import React from 'react';
import App from 'src/components/layouts/App';
import PublicationCard from 'src/components/layouts/PublicationCard';
import StoryCard from 'src/components/layouts/StoryCard';
import NewSubscriber from 'src/components/layouts/NewSubscriber';
import CardArticleGroup from 'src/components/layouts/CardArticleGroup';
import TopBeatmaker from 'src/components/layouts/TopBeatmaker';
import FeaturedArtist from 'src/components/layouts/FeaturedArtist';
import PostContent from 'src/components/layouts/PostContent';
import Separator from 'src/components/uikit/Separator';
import HomePageNavigation from 'src/components/layouts/HomePageNavigation';
import ProfilPicture from 'src/components/layouts/ProfilPicture';

const Home = () => {
	return (
		<App>
			{/* content home page */}
			<div className="lg:flex justify-between space-x-1 dark:py-3 dark:bg-secondary">
				<aside className="w-full lg:w-3/12 dark:bg-secondary dark:text-white bg-slate-100 px-3 py-5 lg:py-20">
					<ProfilPicture />
					<HomePageNavigation />
				</aside>

				<main className="w-full lg:w-6/12 rounded-md dark:bg-[#3f3f3f7d]  dark:text-white bg-slate-100 p-2 pt-4">
					<PublicationCard />
					<StoryCard className="mt-8" />
					<Separator className="mt-4" />
					<PostContent />
				</main>

				<aside className="w-full lg:w-3/12 dark:bg-secondary dark:text-white bg-slate-100 px-3  pb-20">
					<NewSubscriber />
					<CardArticleGroup title="Beat Recommandé" className="mt-3" />
					<TopBeatmaker className="mt-3" />
					<FeaturedArtist className="mt-3" />
					<CardArticleGroup title="Nouveauté Musicale" className="mt-3" />
					<CardArticleGroup title="Top playlists" oneTitle className="mt-3" />
					<CardArticleGroup
						title="Podcast Tendance"
						oneTitle
						className="mt-3"
					/>
				</aside>
			</div>
		</App>
	);
};

export default Home;
