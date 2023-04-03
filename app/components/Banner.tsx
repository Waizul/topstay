import { Banner } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
	purpose,
	title1,
	title2,
	desc1,
	desc2,
	buttonText,
	linkName,
	imageUrl,
}: Banner) => {
	return (
		<div className="flex flex-wrap items-center justify-center m-10">
			<Image src={imageUrl} alt='' width={500} height={300} />
			<div className='p-5'>
				<p className="text-gray-500 font-medium">{purpose}</p>
				<h1 className="text-3xl font-bold">
					{title1} <br /> {title2}
				</h1>
				<p className="text-lg text-gray-700 py-3">
					{desc1} <br /> {desc2}
				</p>
				<button className="text-xl bg-blue-500 px-4 py-2 font-medium rounded-md text-white hover:bg-blue-700 transition-all">
					<Link href={linkName}>{buttonText}</Link>
				</button>
			</div>
		</div>
	);
};

export default Banner;
