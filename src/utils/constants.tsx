export const testProfilesResponse = {
	"total": 2,
	"items": [
		{
			"email": "5pM@CmJsssbzcVSciTPMZH.wdp",
			"cohort": "web+123",
			"_id": "507f1f77bcf86cd799439011",
			"createdAt": 1671899493440,
			"updatedAt": 1671899493440,
			"profile": {
				"name": "Ivan Ivanov",
				"photo": "https://placehold.co/600",
				"city": {
					"name": "Москва",
					"geocode": [
						55.755864,
						37.617698
					]
				}
			}
		},
		{
			"email": "aMvj2RTFR@MPk.pho",
			"cohort": "web+123",
			"_id": "507f1f77bcf86cd799439011",
			"createdAt": 1671899493440,
			"updatedAt": 1671899493440,
			"profile": {
				"name": "Ivan Egorov",
				"photo": "https://placehold.co/600",
				"city": {
					"name": "Санкт-Петербург",
					"geocode": [
						59.938955,
						30.315644
					]
				}
			}
		},
		{
			"email": "aMvj2RTFR@MPk.pho",
			"cohort": "web+123",
			"_id": "507f1f77bcf86cd799439011",
			"createdAt": 1671899493440,
			"updatedAt": 1671899493440,
			"profile": {
				"name": "Ivan Petrov",
				"photo": "https://placehold.co/600",
				"city": {
					"name": "Казань",
					"geocode": [
						55.796127,
						49.106414
					]
				}
			}
		}
	]
}

export type TProfileResponse = {
	"total": number,
	"items": Array<TUserItem>
}

export type TUserItem = {
	"email": string,
	"cohort": string,
	"_id": string,
	"createdAt": number,
	"updatedAt": number,
	"profile": TProfileItem
}

export type TProfileItem = {
	"name": string,
	"photo": string,
	"city": {
		"name": string,
		"geocode": Array<number>
	}
}

export type TCity = {
	name: string,
	geocode: Array<number>
}

export const getProfiles = (responseObj: TProfileResponse): Array<TProfileItem> => {
	const profiles = responseObj.items.map(item => item.profile);
	return profiles;
}
