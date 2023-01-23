import {TApiConfig, TApiResponse} from "./types";
import {TUser} from "../types/types";
import {apiConfig} from "./config";

class Api {
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

	//получаем список всех пользователей - для админки
	getUsersData = (token: string): Promise<TApiResponse<TUser>> => {
		return fetch(`${this.baseUrl}/users`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response));
	}

	//получаем список пользователей контректной когорты - для студента
	getCohortData = (token: string) => {
		return fetch(`${this.baseUrl}/profiles`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response));
	}

	//получаем детальную информацию о пользователе - для студента
	getProfileData = (token: string, id: string) => {
		return fetch(`${this.baseUrl}/profiles/:${id}`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response));
	}

	//изменяем детальную информацию о пользователе - для студента
	setProfileData = (token: string, id: string, profileData: any) => {
		return fetch(`${this.baseUrl}/profiles/:${id}`, {
			method: 'PATCH',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({profileData}),
		}).then((response) => this.checkResponse(response));
	}

	//добавляем нового пользователч - для админки
	addNewUserData = (token: string, userData: any) => {
		return fetch(`${this.baseUrl}/users`, {
			method: 'POST',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: userData.email,
				cohort: userData.cohort,
			}),
		}).then((response) => this.checkResponse(response));
	}

	//изменяем данные пользователя - для админки
	changeUserData = (token: string, userData: any) => {
		return fetch(`${this.baseUrl}/users/:${userData.id}`, {
			method: 'PUT',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: userData.email,
				cohort: userData.cohort
			})
		})
	}

	//получаем все комментарии - для админки
	getCommentsData = (token: string) => {
		return fetch(`${this.baseUrl}/comments)`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	//удаляем комментарий - для админки
	deleteComment = (token: string, id: string) => {
		return fetch(`${this.baseUrl}/comments/:${id}`, {
			method: 'DELETE',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	//получаем все реакции по id пользователя - для студента
	getReactionsForUser = (token: string, id: string) => {
		return fetch(`${this.baseUrl}/profiles/:${id}/reactions`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	sendNewReaction = (token: string, id: string, reactionData: any) => {
		return fetch(`${this.baseUrl}/profiles/:${id}/reactions`, {
			method: 'POST',
			headers: {
				...this.headers,
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				target: reactionData.target,
				text: reactionData.text
			})
		}).then((response) => this.checkResponse(response))
	}
}

const api = new Api(apiConfig);

export {api}