export default interface Iuser {
  id: number;
  age: number;
  name: {
    last: string;
    first: string;
  };
  email: string;
  index: number;
  phone: number;
  picture: string;
}
