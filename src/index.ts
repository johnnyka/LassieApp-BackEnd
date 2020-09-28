import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import {
  createArticleStore, createBreedStore, createDogStore, createUserStore
} from './utils';

import ArticleAPI from './datasources/Article';
import DogAPI from './datasources/Dog';
import BreedAPI from './datasources/Breeds';
import UserAPI from './datasources/User';

const articleStore = createArticleStore();
const dogStore = createDogStore();
const breedStore = createBreedStore();
const userStore = createUserStore();


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    articleAPI: new ArticleAPI({ store: articleStore }),
    dogAPI: new DogAPI({ store: dogStore }),
    breedAPI: new BreedAPI({ store: breedStore }),
    userAPI: new UserAPI({ store: userStore }),
  }),
});

server.listen()
  .then(({ url }: { url: string }) => console.log(`Server running on ${url}`));
