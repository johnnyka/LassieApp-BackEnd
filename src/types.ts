export type TArticleData = {
  id: string
  content: string
  title: string
  readTime: number
  views: number
  imgUri: string
  recommended: boolean
};
export type TDog = {
  id: string,
  owner: string,
  name: string,
  gender: string,
  breed: string,
  ageType: string,
  age: number,
};
export type TUser = {
  id: string,
  email: string
  name: string
  pet: string[]
};
export type TBreed = {
  breedID: string
  breedName: string
};
export type InputUser = {
  name: string,
  email: string,
};

export type InputDog = {
  name: string
  breed: string
  gender: string
  ageType: string
  age: number
};

export type TDataSources = {
  dataSources: {
    articleAPI: {
      store: TArticleData[]
      getArticles: (recommended: boolean) => TArticleData[]
      getArticleByID: (id: string) => TArticleData
    }
    dogAPI: {
      store: TDog[]
      getDogByOwnerID: (id: string) => TDog
      addDog: (
        owner: string,
        name: string,
        breed: string,
        gender: string,
        ageType: string,
        age: number,
        id: string
      ) => TDog
    }
    userAPI: {
      store: TUser[]
      getUserByID: (id: string) => TUser
      createUser: (name: string, email: string) => TUser
    }
    breedAPI: {
      store: TBreed[]
      getBreeds: () => TBreed[]
      getBreedByID: (id: string) => TBreed
    }
  }
};
