import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    article(id: ID!): Article!
    articles(recommended: Boolean): [Article]!
    user(id: ID): User
    breeds: [Breed!]!
    breed(id:ID!):Breed
  }
  type Mutation {
    createUser(inputUser:NewUser!, inputDog:addDog!):User
  }
  type Article {
    id: ID!
    content: String
    title: String
    readTime: Int
    views: Int
    imgUri: String
    recommended: Boolean
  }
  input NewUser {
    name:String
    email:String
  }
  input addDog {
    name:String
    breed:[String!]!
    gender:DogGender!
    ageType:ageType!
    age:Int!
  }

  type User {
    id: ID!
    pets: [Dog]!
    name: String
    email: String
  }
  type Breed {
      breedID:ID!
      breedName:String
  }
  type Dog {
    id: ID!
    owner: User!
    name: String!
    breed: Breed!
    gender: DogGender!
    ageType: ageType!
    age: Int
  }

  enum DogGender {
    MALE
    FEMALE
  }
  enum ageType {
    YEARS
    WEEKS
    MONTHS
  }
`;

export default typeDefs;
