import {TApiConfig, TApiResponse} from "./types";
import {TBaseUserData, TComment, TProfileDetails, TReaction, TReactionBody, TStudent, TStudentDetail, TUser} from "../types/types";
import {apiConfig} from "./config";

class Api {
	private readonly baseUrl: string;
	private readonly headers: {
		[key: string]: string,
	};
	private token: string = '';

	constructor(config: TApiConfig) {
		this.baseUrl = config.baseUrl;
		this.headers = config.headers;
	}

	private checkResponse = (res: Response) => {
		return res.ok
		? res.json()
		: res.json().then((data) => Promise.reject(data));
	}

	// сохраняем токен в области видимости методов класса.
	// необходимо передать в него токен до начала работы с другими
	// методами класса Api. При обновлении токена так же обновить.
	public setToken(token: string) {
		this.token = token;
	}
	//получаем список всех пользователей - для админки
	getUsersData = (): Promise<TApiResponse<TUser>> => {
		return fetch(`${this.baseUrl}/users`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response));
	}

	//получаем список пользователей контректной когорты - для студента
	getCohortData = (): Promise<TApiResponse<TStudent>> => {
		return fetch(`${this.baseUrl}/profiles`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response));
	};

	//получаем детальную информацию о пользователе - для студента
	getProfileData = (_id: string): Promise<TStudentDetail> => {
		return fetch(`${this.baseUrl}/profiles/${_id}`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response));
	}

	//изменяем детальную информацию о пользователе - для студента
	setProfileData = (_id: string, profileData: TProfileDetails): Promise<TStudent> => {
		return fetch(`${this.baseUrl}/profiles/${_id}`, {
			method: 'PATCH',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			},
			body: JSON.stringify({profileData}),
		}).then((response) => this.checkResponse(response));
	}

	//добавляем нового пользователч - для админки
	addNewUserData = (userData: TBaseUserData): Promise<TBaseUserData> => {
		return fetch(`${this.baseUrl}/users`, {
			method: 'POST',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			},
			body: JSON.stringify({
				email: userData.email,
				cohort: userData.cohort,
			}),
		}).then((response) => this.checkResponse(response));
	}

	//изменяем данные пользователя - для админки
	changeUserData = (userData: TBaseUserData): Promise<TBaseUserData> => {
		return fetch(`${this.baseUrl}/users/${userData._id}`, {
			method: 'PUT',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			},
			body: JSON.stringify({
				email: userData.email,
				cohort: userData.cohort
			})
		}).then((response) => this.checkResponse(response));
	}

	//получаем все комментарии - для админки
	getCommentsData = (): Promise<TApiResponse<TComment>> => {
		return fetch(`${this.baseUrl}/comments`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	//удаляем комментарий по id комментария(реакции)- для админки
	deleteComment = (_id: string): Promise<void> => {
		return fetch(`${this.baseUrl}/comments/${_id}`, {
			method: 'DELETE',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	//получаем все реакции по id пользователя - для студента
	getReactionsForUser = (_id: string): Promise<TApiResponse<TReaction>> => {
		return fetch(`${this.baseUrl}/profiles/${_id}/reactions`, {
			method: 'GET',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
			}
		}).then((response) => this.checkResponse(response))
	}

	sendNewReaction = (_id: string, reactionData: TReactionBody): Promise<any> => {
		return fetch(`${this.baseUrl}/profiles/${_id}/reactions`, {
			method: 'POST',
			headers: {
				...this.headers,
				Authorization: `Bearer ${this.token}`
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
