import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

interface props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: props) => (
  <main>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </main>
);

export default Layout;
