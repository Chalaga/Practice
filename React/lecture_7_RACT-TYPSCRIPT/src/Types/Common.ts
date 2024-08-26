export interface InputPropsType {
  width: number;
  height: number;
  rounded: number;
  backgroundColor: string;
  textColor: string;
  placeholder: string;
  type:
    | "button"
    | "checkbox"
    | "email"
    | "password"
    | "search"
    | "submit"
    | "text";
}

export interface GeoPropsTypes {
  geo: {
    lat: string;
    lng: string;
  };
}

export interface AddressPropsTypes {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface CompanyPropsTypes {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserPropsType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressPropsTypes;
  geo: GeoPropsTypes;
  phone: string;
  website: string;
  company: CompanyPropsTypes;
}

export interface ButtonPropsType {
  width: number;
  height: number;
  text: string;
  backdraoundcolor: string;
  textcolor: string;
  Onclick: () => void;
}
