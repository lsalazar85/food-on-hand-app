interface props {
  children: JSX.Element | JSX.Element[];
}

const Content = ({ children }: props) => (
  <div className="contentWrapper">{children}</div>
);

export default Content;
