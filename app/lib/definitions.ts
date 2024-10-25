export type User = {
  id: string;
  name: string;
  account: string;
  password: string;
  datecreate: string;
  role: string;
}

export type Product = {
  id: string;
  name: string;
  class: string;
  type: string;
  quantity: string;
  dateimport: string;
  dateexport: string;
  dateexpired: string;
}

export type Image = {
  id: string;
  name: string;
  url: string;
}
