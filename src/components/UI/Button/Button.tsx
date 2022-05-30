import { ButtonProps } from '../../../interfaces';

const Button = ({ text, onClick }: ButtonProps) => (
  <button className="button" type="button" onClick={onClick}>{text}</button>
);

export default Button;
