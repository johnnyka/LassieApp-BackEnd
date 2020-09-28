/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TDataSources, TArticleData, TDog, TBreed, TUser, InputUser, InputDog
} from './types';

export default {
  Query: {
    articles: (
      _: any,
      { recommended }: { recommended: boolean },
      { dataSources }: TDataSources
    ) => dataSources.articleAPI.getArticles(recommended),

    article: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TArticleData => dataSources.articleAPI.getArticleByID(id),
    user: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TUser => dataSources.userAPI.getUserByID(id),
    breed: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TBreed => dataSources.breedAPI.getBreedByID(id),
    breeds: (
      _: any,
      __: any,
      { dataSources }: TDataSources
    ): TBreed[] => dataSources.breedAPI.getBreeds(),
  },
  Mutation: {
    createUser: (
      _: any,
      { inputUser, inputDog }: { inputUser: InputUser, inputDog: InputDog },
      { dataSources }: TDataSources
    ): TUser => {

      const { name: userName, email } = inputUser;
      const {
        name: dogName, breed, gender, ageType, age,
      } = inputDog;
      const newUser = dataSources.userAPI.createUser(userName, email);

      dataSources.dogAPI.addDog(
        newUser.id,
        dogName,
        breed,
        gender,
        ageType,
        age,
        newUser.pet[newUser.pet.length - 1]
      );
      
      return newUser;
    },
  },
  User: {
    pets: (
      user: TUser,
      __: any,
      { dataSources }: TDataSources
    ) => dataSources.dogAPI.getDogByOwnerID(user.id),
  },
  Dog: {
    owner: (
      dog: TDog,
      __: any,
      { dataSources }: TDataSources
    ) => dataSources.userAPI.getUserByID(dog.owner),
    breed: (
      dog: TDog,
      __: any,
      { dataSources }: TDataSources
    ): TBreed => dataSources.breedAPI.getBreedByID(dog.breed),
  },
};
