import { Header } from '../Header';

interface props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: props) => (
  <main>
    <Header />
    {children}
  </main>
);

export default Layout;
