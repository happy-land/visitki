// Анна
export type TBaseUserData = {
  email: string,
  cohort: string,
  _id?: string,
  createdAt?: number,
  updatedAt?: number,
}

export type TUser = {
  name?: string
} & TBaseUserData

// Елизавета
// export type TUser = {
//   _id: string,
//   createdAt: number,
//   updatedAt?: number,
//   email: string,
//   cohort: string,
//   name: string
//   photo?: string
// };

// Елизавета
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

// Анна
// export type TStudent = {
//   reactions?: number | null,
// } & TBaseUserData & TProfileDetails

// Анна
export type TProfileDetails = {
  profile: {
    name?: string,
    photo?: string,
    city?: TCity,
    birthday?: string,
    quote?: string,
    telegram?: string,
    github?: string,
    template?: string,
  }
  info?: TProfileInfo
}

// Анна
export type TProfileInfo = {
  hobby?: TProfileBlock,
  status?: TProfileBlock,
  job?: TProfileBlock,
  edu?: TProfileBlock
}

// Анна
export type TCity = {
  name: string,
  geocode: Array<string>
}

// Анна
export type TProfileBlock = {
  text?: string,
  image?: string | null
}

// Елизавета
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

// Елизавета
// export type TReaction = {
//   _id: string;
//   from: {
//     _id: string;
//     name: string;
//     email: string;
//   };
//   target: 'hobby' | 'edu' | 'status' | 'job' | null;
//   text: string,
//   to: {
//     _id: string;
//     name: string;
//     email: string;
//   }
// }

// Анна
export type TReaction = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  emotion?: 'like' | 'smile' | 'heart' | undefined;
} & TReactionBody

// Анна
export type TReactionBody = {
  target: 'hobby' | 'edu' | 'status' | null;
  text:string
}

// Анна
export type TComment = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  text: string,
  to: {
    _id: string;
    name: string;
    email: string;
  }
}

export type TEmotions = {
  [key: string]: Array<TReaction>;
}

// type T = {
//   [key: string]: Array<TReaction>;
// }