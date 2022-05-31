import { Location } from '../types';

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

export interface CardElements {
  id?: string;
  name: string;
  phone: number;
  is_closed: boolean;
  rating: number;
  image_url: string;
  location: Location;
}

export interface CardProps {
  details: CardElements
}

export interface AddressState {
  addressName?: string;
  latitude: number;
  longitude: number;
}

export interface ModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  content: JSX.Element | JSX.Element[];
}
