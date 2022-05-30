import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { ChildrenElement } from '../../interfaces';

const Layout = ({ children }: ChildrenElement) => (
  <main>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </main>
);

export default Layout;
