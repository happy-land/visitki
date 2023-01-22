export type TBaseUserData = {
  email: string,
  cohort: string,
  _id: string,
  createdAt: number,
  updatedAt: number,
}

export type TUser = {
  name: string
} & TBaseUserData

export type TStudent = {
  profile: {
      name: string,
      photo: string,
      city: {
          name: string,
          geocode: Array<string>
      }
  }
} & TBaseUserData

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