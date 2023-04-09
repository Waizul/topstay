import { PropertyDetailsType, PropertyListType } from "@/types";
import axios from "axios";
import { data, propertyDeatils } from "../data";

export const baseUrl = "https://bayut.p.rapidapi.com";

const headers = {
	"X-RapidAPI-Key": process.env.RAPID_API_KEY_2,
	"X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

export async function fetchProperties(url: string) {
	const fullUrl = baseUrl + url;

	const res = await axios
		.get(fullUrl, { headers })
		.then(function ({ data }: { data: PropertyListType }) {
			return data;
		})
		.catch(function (error: any) {
			console.error(error.response.data);
		});

	// const res = data;

	return res?.hits;
}

export async function fetchPropertyDetails(url: string) {
	const fullUrl = baseUrl + url;

	const res = await axios
		.get(fullUrl, { headers })
		.then(function ({ data }: { data: PropertyDetailsType }) {
			return data;
		})
		.catch(function (error: any) {
			console.error(error);
		});

	// const res = propertyDeatils;

	return res;
}
