import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Key": "8defb3eacbmsh5a9365d462bc3fap1d22d8jsn0ebacd943669",
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
		},
	});

	return data;
};
