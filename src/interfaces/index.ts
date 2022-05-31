export interface ImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

export interface ChildrenElement {
  children: JSX.Element | JSX.Element[];
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CardProps {
  name: string;
  phone: number;
  isClosed: boolean;
  rating: number;
}

export interface AddressState {
  addressName?: string;
  latitude: number;
  longitude: number;
}
