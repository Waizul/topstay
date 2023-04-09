import { Inter } from "next/font/google";
import Banner from "./components/Banner";
import { baseUrl, fetchProperties } from "@/lib/fetchApi";
import Property from "./components/Property";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const propertyForSale = await fetchProperties(
		'/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6'
	);

	const propertyForRent = await fetchProperties(
		'/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6'
	);

	// console.log("propertyForRent", propertyForRent);
	return (
		<main className='w-full max-w-[1100px] mx-auto'>
			<Banner
				purpose='RENT A HOME'
				title1='Rental Homes for'
				title2='Everyone'
				desc1=' Explore from Apartments, builder floors, villas'
				desc2='and more'
				buttonText='Explore Renting'
				linkName='/search?purpose=for-rent'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
			/>
			<div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-between md:px-10 lg:px-0'>
				{propertyForRent?.map((property) => (
					<Property property={property} key={property.id} />
				))}
			</div>
			<Banner
				purpose='BUY A HOME'
				title1=' Find, Buy & Own Your'
				title2='Dream Home'
				desc1=' Explore from Apartments, land, builder floors,'
				desc2=' villas and more'
				buttonText='Explore Buying'
				linkName='/search?purpose=for-sale'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>
			<div className='flex flex-col md:flex-row md:flex-wrap items-center justify-between md:px-4'>
				{propertyForSale?.map((property) => (
					<Property property={property} key={property.id} />
				))}
			</div>
		</main>
	);
}
