// Анна
export type TBaseUserData = {
  email?: string,
  cohort?: string,
  _id?: string,
  createdAt?: number,
  updatedAt?: number,
}

export type TUser = {
  name: string
  email: string,
  cohort: string,
  _id: string,
  createdAt: number,
  updatedAt?: number,
}

// Анна
 export type TStudent = {
   reactions: number,
 } & TBaseUserData & TProfileDetails


export type TProfileShortItem = {
  "name": string,
  "photo": string,
  "city": TCity
}


// Анна
// export type TProfileDetails = {
//   profile: {
//     name?: string,
//     photo?: string,
//     city?: TCity,
//     birthday?: string,
//     quote?: string,
//     telegram?: string,
//     github?: string,
//     template?: string,
//   }
//   info?: TProfileInfo
// }

export type TProfileDetails = {
  name?: string,
  photo?: string,
  city: TCity,
  birthday?: string,
  quote?: string,
  telegram?: string,
  github?: string,
  template?: string,
}

// Анна
export type TCity = {
  name?: string,
  geocode?: Array<string>
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
    city: TCity,
    birthday?: string,
    quote?: string,
    telegram?: string,
    github?: string,
    template?: string
  },
  info?: {
    hobby?: {
      image?: string;
      reactions?: number;
      text?: string;
    },
    status?: {
      image?: string;
      reactions?: number;
      text?: string;
    },
    job?: {
      reactions?: number;
      text?: string;
    },
    edu?: {
      reactions?: number;
      text?: string;
    }
  },
  reactions: number
}

// Анна
export type TReaction = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
} & TReactionBody

// Анна
export type TReactionBody = {
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  text?:string
  emotion?: 'like' | 'dislike' | 'wave' | 'smile' | 'upset' | 'funny' | 'confused' | 'scream' | 'love' | 'heart';
}

// Анна
export type TComment = {
  _id: string;
  from: {
    cohort: string;
    _id: string;
    name: string;
    email: string;
  };
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  text: string,
  to: {
    cohort: string;
    _id: string;
    name: string;
    email: string;
  }
}

export type TEmotion = {
  type: 'like' | 'dislike' | 'wave' | 'smile' | 'upset' | 'funny' | 'confused' | 'scream' | 'love' | 'heart',
  image: string,
  counter: number
}

export type TStateMapPage = {
  dataArr: Array<TProfileDetails> | null;
}
