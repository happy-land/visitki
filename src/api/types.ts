export type TApiConfig = {
	readonly baseUrl: string;
	readonly headers: {
		[key: string]: string;
	}
}

export type TApiResponse<T> = {
	total: number;
	items: Array<T>
}