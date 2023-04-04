import { fetchApi } from "./lib/fetchApi";

export type BannerType = {
	purpose: string;
	title1: string;
	title2: string;
	desc1: string;
	desc2: string;
	buttonText: string;
	linkName: string;
	imageUrl: string;
};

type CoverPhoto = {
	url: string;
};

type Agency = {
	name: string;
	logo: {
		url: string;
	};
};

export type PropertyType = {
	id: number;
	_geoloc: Object;
	geography: Object;
	purpose: string;
	price: 11700;
	rentFrequency: string;
	title: string;
	externalID: string;
	location: Array;
	category: Array;
	rooms: number;
	baths: number;
	area: number;
	score: number;
	coverPhoto: CoverPhoto;
	phoneNumber: Object;
	contactName: string;
	agency: Agency;
	hash: string;
	keywords: Array;
	isVerified: true;
	completionStatus: string;
	furnishingStatus: string;
	extraFields: Object;
	type: string;
	hasTransactionHistory: true;
	amenities: Array;
	cityLevelScore: number;
	hidePrice: false;
	locationPurposeTier: number;
	objectID: string;
	_highlightResult: Object;
};

export type PropertyListType = {
	hits?: PropertyType[];
};
