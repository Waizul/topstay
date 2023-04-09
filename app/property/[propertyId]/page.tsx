import { baseUrl, fetchPropertyDetails } from "@/lib/fetchApi";
import millify from "millify";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

import ImageScrollbar from "@/app/components/ImageScrollbar";

export default async function PropertyDetails({
	params,
}: {
	params: { propertyId: string };
}) {
	const property = await fetchPropertyDetails(
		`/properties/detail?externalID=${params?.propertyId}`
	);
	console.log(params.propertyId, property)

	const {
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		phoneNumber,
		isVerified,
		description,
		type,
		purpose,
		furnishingStatus,
		amenities,
		photos,
	} = property;
 
  
	return (
		<div className="max-w-[1000px] mx-auto">
			{photos && <ImageScrollbar photos={photos} />}

			<div className='p-6'>
				<div className='flex items-center pt-2'>
					<p className='text-green-400 pr-3'>{!isVerified && <GoVerified />}</p>
					<h3 className="font-medium text-md mr-4">
						AED {price} {rentFrequency && `/${rentFrequency}`}
					</h3>
					
					<Image
						src={agency.logo.url}
						alt='agency logo'
						width={30}
						height={25}
					/>
				</div>

				<div className='flex items-center justify-between p-1 w-[250px] text-blue-500'>
					{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
					<BsGridFill />
				</div>
			</div>

			<div className="p-6 pt-0">
				<h1 className="text-lg mb-2 font-semibold">{title}</h1>
				<p className="text-gray-600 leading-6">{description}</p>
			</div>

			<div className='flex justify-between flex-wrap p-6 uppercase'>
				<div className='flex justify-between w-[300px] border-b-2 border-b-gray-100'>
					<p>Type</p>
					<p className="font-semibold">{type}</p>
				</div>

				<div className='flex justify-between w-[300px] border-b-2 border-b-gray-100'>
					<p>Purpose</p>
					<p className="font-semibold">{purpose}</p>
				</div>

				{furnishingStatus && (
					<div className='flex justify-between w-[300px] border-b-2 border-b-gray-100'>
						<p>Furnishing Status</p>
						<p className="font-semibold">{furnishingStatus}</p>
					</div>
				)}
			</div>

			<div className="p-6">
				{amenities.length && <h3 className="font-semibold text-lg">Facilities:</h3>}
				<div className='flex flex-wrap gap-2'>
					{amenities?.map((item) =>
						item?.amenities?.map((amenity) => <p className="font-medium text-sky-500 bg-gray-200 rounded-md py-1 px-2">{amenity.text}</p>)
					)}
				</div>
			</div>
		</div>
	);
}
