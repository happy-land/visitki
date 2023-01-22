import {TApiConfig, TApiResponse} from "./types";
import {TUser} from "../types/types";

export class Api {
	private readonly baseUrl: string;
	private readonly headers: {
		[key: string]: string,
	};

	constructor(config: TApiConfig) {
		this.baseUrl = config.baseUrl;
		this.headers = config.headers;
	}

	private checkResponse = (res: Response) => {
		return res.ok
		? res.json()
		: res.json().then((data) => Promise.reject(data));
	}

	getUsers = (token: string): Promise<TApiResponse<TUser>> => {
		return fetch(`${this.baseUrl}/users`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response));
	}


}