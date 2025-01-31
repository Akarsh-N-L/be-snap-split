interface IUser {
  name: string;
  email: string;
  uid: string;
  password: string;
  groups: string[];
  balances: string[];
}

interface INewUser {
  name: string;
  email: string;
  password: string;
}

export { IUser, INewUser };
