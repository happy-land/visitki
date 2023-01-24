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

export type TStudent = {
  reactions?: number | null,
} & TBaseUserData & TProfileDetails

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

export type TProfileInfo = {
  hobby?: TProfileBlock,
  status?: TProfileBlock,
  job?: TProfileBlock,
  edu?: TProfileBlock
}

export type TCity = {
  name: string,
  geocode: Array<string>
}

export type TProfileBlock = {
  text?: string,
  image?: string | null
}

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

export type TReaction = {
  _id: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  emotion?: 'like' | 'smile' | 'heart' | undefined;
} & TReactionBody

export type TReactionBody = {
  target: 'hobby' | 'edu' | 'status' | null;
  text:string
}

export type TEmotions = {
  [key: string]: Array<TReaction>;
}

// type T = {
//   [key: string]: Array<TReaction>;
// }