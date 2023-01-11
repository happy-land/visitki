export type TResponse<T> = {
  success: boolean;
} & T;

export const checkResponse = <T>(res: Response) => {
  console.log(res);
  return res.ok ? res.json().then(data => data as TResponse<T>) : Promise.reject(res.status);
};


export const checkSuccess = <T>(response: TResponse<T>) => {
  console.log(response);
  return response.success ? response : Promise.reject('Error data');
}