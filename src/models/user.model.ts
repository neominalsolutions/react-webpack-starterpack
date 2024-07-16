export interface GeoLocation {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: GeoLocation;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
}
