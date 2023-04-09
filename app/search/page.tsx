import { notFound } from "next/navigation";

import { fetchProperties } from "@/lib/fetchApi";
import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { SearchParams } from "@/types";

export default async function page({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const purpose = searchParams?.purpose || "for-rent";
	const rentFrequency = searchParams.rentFrequency || "yearly";
	const minPrice = searchParams.minPrice || "0";
	const maxPrice = searchParams.maxPrice || "1000000";
	const roomsMin = searchParams.roomsMin || "0";
	const bathsMin = searchParams.bathsMin || "0";
	const sort = searchParams.sort || "price-desc";
	const areaMax = searchParams.areaMax || "35000";
	const locationExternalIDs = searchParams.locationExternalIDs || "5002";
	const categoryExternalID = searchParams.categoryExternalID || "4";

	const properties = await fetchProperties(
		`/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
	);
	console.log("properties", properties?.length);

	return (
		<div>
			<SearchFilters />

			<p className='font-semibold text-xl py-4'>
				Properties for <span className='capitalize'>{purpose}</span>
			</p>

			<div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-between md:px-10 lg:px-0'>
				{properties?.map((property) => (
					<Property property={property} key={property.id} />
				))}
			</div>

			{properties?.length === 0 && notFound()}
		</div>
	);
}
