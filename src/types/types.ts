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

export type TReaction = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  text: string;
  emotion?: 'like' | 'smile' | 'heart' | undefined;
}

export type TEmotions = {
  [key: string]: Array<TReaction>;
}

// type T = {
//   [key: string]: Array<TReaction>;
// }