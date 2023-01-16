import axios from "axios"

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

export const getProfileById = (id: string) => {
  axios.get(`/profiles/${id}`)
  .then((response) => {

  })
  .catch((error) => console.log(error))
  .finally(() => {

  });
}

export const getComments = () => {
  axios.get('/comments')
  .then((response) => {

  })
  .catch((error) => console.log(error))
  .finally(() => {

  });
}