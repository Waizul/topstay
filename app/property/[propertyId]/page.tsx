import { baseUrl, fetchPropertyDetails } from "@/lib/fetchApi";

export default async function PropertyDetails({
	params,
}: {
	params: { propertyId: string };
}) {
	let Id = 4594156;
	const property = await fetchPropertyDetails(`${baseUrl}/properties/detail?externalID=${params?.propertyId}`)
  console.log('property',params.propertyId, property)
	
	return <div>{property.title}</div>;
}
