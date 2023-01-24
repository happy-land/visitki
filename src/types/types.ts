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

export type TStudentDetail = {
  email: string,
  cohort: string,
  _id: string,
  createdAt: number,
  updatedAt?: number,
  profile: {
    name: string,
    photo: string,
    city?: {
      name: string,
      geocode: [
          string,
          string
      ]
    },
    birthday: string,
    quote?: string,
    telegram?: string,
    github?: string,
    template: string
  },
  info?: {
    hobby?: {
      image: string;
      reactions: number;
      text: string;
    },
    status?: {
      image: string;
      reactions: number;
      text: string;
    },
    job?: {
      reactions: number;
      text: string;
    },
    edu?: {
      reactions: number;
      text: string;
    }
  },
  reactions?: number
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