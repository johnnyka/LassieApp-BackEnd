import { DataSource } from 'apollo-datasource';
import { TBreed } from '../types';

class BreedAPI extends DataSource {
  store: TBreed[];

  constructor({ store }: { store: TBreed[] }) {
    super();
    this.store = store;
  }

  getBreedByID(id: string): TBreed | undefined {
    return this.store.find((breed) => breed.breedID === id) || undefined;
  }

  getBreeds(): TBreed[] | TBreed {
    return this.store || undefined;
  }
}

export default BreedAPI;
