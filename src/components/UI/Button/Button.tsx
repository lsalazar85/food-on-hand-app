interface props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: props) => (
  <button className="button" type="button" onClick={onClick}>{text}</button>
);

export default Button;
