import { DataSource } from 'apollo-datasource';
import { TDog } from '../types';

class DogAPI extends DataSource {
  store: TDog[];

  constructor({ store }: { store: TDog[] }) {
    super();
    this.store = store;
  }

  getDogByOwnerID(id: string): TDog[] | undefined {
    return this.store.filter((x) => x.owner === id) || undefined;
  }

  addDog(
    owner: string,
    name: string,
    breed: string,
    gender: string,
    ageType: string,
    age: number,
    id: string
  ): TDog[] | undefined {
    const newDog = {
      owner, name, breed, gender, ageType, age, id,
    };
    this.store.push(newDog);
    return this.getDogByOwnerID(owner);
  }
}

export default DogAPI;
