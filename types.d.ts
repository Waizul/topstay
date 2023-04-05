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
	title: null;
	url: string;
};

type Agency = {
	name: string;
	logo: {
		url: string;
	};
};

type Location = {
	level: number;
	name: string;
	slug: string;
};

type Category = {
	name: string;
	slug: string;
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
	hits: PropertyType[];
};

export type PropertyDetailsType = {
	id: number;
	state: string;
	geography: {
		lat: number;
		lng: number;
	};
	purpose: string;
	price: number;
	product: string;
	rentFrequency: null;
	title: string;
	description: string;
	externalID: string;
	slug: string;
	location: Location[];
	category: Category[];
	rooms: number;
	baths: number;
	area: number;
	score: number;
	coverPhoto: CoverPhoto;
	photos: CoverPhoto[];
	floorPlans: Array;
	amenities: Array;
	phoneNumber: {
		mobile: string;
		phone: string;
		whatsapp: string;
	};
	contactName: string;
	agency: Agency;
	isVerified: boolean;
	completionStatus: string;
	furnishingStatus: null;
	extraFields: null;
	type: string;
	cityLevelScore: 3;
	hasMatchingFloorPlans: boolean;
};
