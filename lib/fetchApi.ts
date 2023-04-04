import { PropertyListType } from "@/types";
import axios from "axios";
import { data } from "../data";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url: string) {
	const options = {
		method: "GET",
		url: url,
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_API_KEY_2,
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
		},
	};
	// const res = await axios
	// 	.request(options)
	// 	.then(function ({ data }: { data: PropertyListType }) {
	// 		return data?.hits;
	// 	})
	// 	.catch(function (error: any) {
	// 		console.error(error);
	// 	});

	const res = data.hits.slice(0,6);
	return res;
}
