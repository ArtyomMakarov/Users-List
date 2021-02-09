export interface IUserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: {[key: string]: string}
}

export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {[key: string]: string}
}

