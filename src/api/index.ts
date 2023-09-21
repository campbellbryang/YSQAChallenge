import { UserItem } from '../interfaces';
import { User } from '../stores/authStore';

let data: UserItem[] = [
  {
    id: 1,
    name: 'First',
    viewed: false,
    description: 'This is the description 1',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Second',
    viewed: false,
    description: 'This is the description 2',
    status: 'in-progress',
  },
  {
    id: 3,
    name: 'Third',
    viewed: false,
    description: 'This is the description 3',
    status: 'complete',
  },
  {
    id: 4,
    name: 'Fourth',
    viewed: false,
    description: 'This is the description 4',
    status: '',
  },
  {
    id: 5,
    name: 'Fifth',
    viewed: true,
    description: 'This is the description 5',
    status: '',
  },
];

let users: User[] = [];
export type UserResponse = { user?: User } & { status?: number };

const mock = (success: boolean, timeout: number) => {
  return new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

export interface IApi {
  getItems(): Promise<any>;
  saveItem(listItem: UserItem): Promise<UserItem[] | false>;
  updateItem(id: string | number, params: Partial<UserItem>): Promise<any>;
  deleteItem(name: string): Promise<UserItem[]>;
}

export class TestApi implements IApi {
  public async getItems(): Promise<any> {
    try {
      await mock(true, 1500);
      return { data, status: 200 };
    } catch (e) {
      console.error(e);
    }
  }

  public async login(email: string, _password: string): Promise<any> {
    const user: User = {
      email,
      id: '123',
    };

    try {
      await mock(true, 1500);
      users = [...users, { ...user }];
      console.log('users', users);

      return { user, status: 200 };
    } catch (e) {
      console.error(e);
    }
  }

  public async logout(userId: string): Promise<any> {
    console.log('users', users);
    const newUsers = users.filter((user) => userId !== user.id);
    console.log(newUsers);
    try {
      await mock(true, 1500);
      users = newUsers;
      return { users, status: 200 };
    } catch (e) {
      console.error(e);
    }
  }

  public async getMe(id: string): Promise<UserResponse> {
    const user: User = users.filter((user) => user.id === id)[0];

    try {
      await mock(true, 1500);
      if (user) {
        return { user, status: 200 };
      }
      return { user: {} as unknown as User, status: 400 };
    } catch (e) {
      return { status: 400 };
    }
  }

  public async saveItem(listItem: UserItem): Promise<UserItem[] | false> {
    const existingItem = data.find((item) => item.id === listItem.id);
    if (existingItem || !listItem) {
      return [];
    }
    data = { ...data, ...listItem };
    console.log(data);
    console.log('listItem', listItem);
    try {
      await mock(true, 500);
      return data;
    } catch {
      console.error('there was an error');
      return [];
    }
  }

  public async updateItem(id: string | number, params: Partial<UserItem>): Promise<UserItem[]> {
    let itemToUpdate = data.find((item) => item.id === id);
    if (!itemToUpdate) {
      return data;
    }
    itemToUpdate = { ...itemToUpdate, ...params };
    data = data.map((item) => {
      if (itemToUpdate && itemToUpdate.id === item.id) {
        item = itemToUpdate;
      }
      return item;
    });

    try {
      await mock(true, 500);
      return data;
    } catch {
      console.error('there was an error');
      return data;
    }
  }

  public async deleteItem(name: string | number): Promise<UserItem[]> {
    data = data.reduce((acc, item) => {
      if (acc && item.name !== name) {
        acc.push(item);
      }
      return acc;
    }, [] as UserItem[]);

    try {
      await mock(true, 1500);
      return data;
    } catch {
      console.error('There was an error');
      return [];
    }
  }
}

export const Api = new TestApi();
