import { DataSource } from 'apollo-datasource';
import { TUser } from '../types';

class UserAPI extends DataSource {
  store: TUser[];

  constructor({ store }: { store: TUser[] }) {
    super();
    this.store = store;
  }

  getUserByID(id: string): TUser | undefined {
    return this.store.find((x) => x.id === id) || undefined;
  }

  generateNewID(): string {
    return (this.store.length + 1).toString();
  }

  createUser(name: string, email: string): TUser | undefined {
    const id = this.generateNewID();
    const petID = this.generateNewID();
    const newUser = {
      name, email, id, pet: [ petID ],
    };
    this.store.push(newUser);
    return this.store.find((x) => x.id === id) || undefined;
  }
}

export default UserAPI;
