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


// Анна
 export type TStudent = {
   reactions: number,
 } & TBaseUserData & TProfileDetails

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

// Анна
export type TReaction = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  emotion?: 'like' | 'smile' | 'heart' | 'upset' | 'funny' | 'confused' | 'scream' | 'love' | 'heart';
} & TReactionBody

// Анна
export type TReactionBody = {
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
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

export type TStateMapPage = {
  data: Array<TProfileShortItem> | null;
}

