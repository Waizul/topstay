import { PropertyType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";

type Props = {
	property: PropertyType;
};

const Property = ({ property }: Props) => {
	const {
		coverPhoto,
		rentFrequency,
		price,
		rooms,
		title,
		baths,
		area,
		agency,
		externalID,
		isVerified,
	} = property;
	// console.log("coverPhoto", coverPhoto, "agency", agency);
	return (
		<div className="pb-5">
			<Link href={`/property/${externalID}`}>
				<div className='flex flex-wrap flex-col justify-start gap-2 cursor-pointer'>
					<div className="w-[460px] md:w-[380px] lg:w-[340px] h-[220px] relative block">
						<Image src={coverPhoto.url} fill sizes='(max-width: 500px) 100px,(max-width: 1023px) 400px, 500px' alt="" />
					</div>

					<div className=''>
						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<p className='pr-3 text-green-700'>
									{isVerified && <GoVerified />}
								</p>
								<p className='font-semibold text-md'>
									AED {price}
									{rentFrequency && `/${rentFrequency}`}
								</p>
							</div>
							<div>
								<Image src={agency?.logo?.url} width={50} height={20} alt='' />
							</div>
						</div>

						<div className='flex items-center justify-between text-sky-400'>
							{rooms}
							<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft | <BsGridFill /> 
						</div>
            <h2 className="text-lg text-sky-500">
              {title.length > 30 ? title.substring(0, 30) + '...' : title}
            </h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Property;
