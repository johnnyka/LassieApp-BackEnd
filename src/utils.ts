import articles from './mock/articlesMock';
import dogs from './mock/dogsMock';
import breeds from './mock/breedsMock';
import users from './mock/userMock';
import {
  TArticleData, TDog, TBreed, TUser
} from './types';

export const createArticleStore = (): TArticleData[] => [ ...articles ];
export const createDogStore = (): TDog[] => [ ...dogs ];
export const createBreedStore = (): TBreed[] => [ ...breeds ];
export const createUserStore = (): TUser[] => [ ...users ];

