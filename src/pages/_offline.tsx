import Image from 'next/image';

const OfflinePage = () => (
	<div className="flex justify-center items-center flex-col h-[80vh] p-10">
		<Image src="/logo.png" alt="Youblog" width={480} height={155} />
		<h1 className="font-bold text-4xl mt-10 text-center">
			Désolé, le site est en maintenance
		</h1>
		<p className="text-2xl text-center">revenez plus tard.</p>
	</div>
);

export default OfflinePage;
