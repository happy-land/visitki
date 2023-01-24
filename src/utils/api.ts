import axios from "axios"

const checkResponse = (res: Response) => {
  if (!res.ok) {
    return res.json()
      .then((err: { message: string | undefined }) => {
        throw new Error(err.message);
      });
  }
  return res.json();
}

export const getUsers = () => {
  axios.get('/users')
  .then((response) => {

  })
  .catch((error) => console.log(error))
  .finally(() => {

  });
}

export const getProfiles = () => {
  axios.get('/profiles')
  .then((response) => {

  })
  .catch((error) => console.log(error))
  .finally(() => {

  });
}

export const getStudentById = (id: string) => fetch(`/profiles/${id}`)
.then(checkResponse)

export const getComments = () => {
  axios.get('/comments')
  .then((response) => {

  })
  .catch((error) => console.log(error))
  .finally(() => {

  });
}

export const getReaction = () => fetch('/profiles/abfccdaa23e0bd1c4448d2f3/reactions')
  .then(checkResponse)

export const sendReaction = (element: {target: string | null, text?: string, emotion?: string}) => {
  return fetch('/profiles/e638ad9bce6d7efd1b5b035b/reactions', { 
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({
      target: element.target,
      text: element.text,
      emotion: element.emotion,
    })
  })
  .then(checkResponse)
}

export const deleteReaction = (id: string) => {
  return fetch(`/comments/${id}`, { 
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
  .then(checkResponse)
}