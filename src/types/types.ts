export type TUser = {
  _id: string,
  createdAt: number,
  updatedAt?: number,
  email: string,
  cohort: string,
  name: string
  photo?: string
};

export type TStudent = {
  _id: string,
  createdAt: number,
  updatedAt?: number,
  email: string,
  cohort: string,
  profile: {
      name: string,
      photo: string,
      city: {
          name: string,
          geocode: [
              string,
              string
          ]
      }
  }
}