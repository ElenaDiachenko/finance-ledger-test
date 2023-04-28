import Button from 'components/ui/button';
import Container from 'components/ui/container';
import { About, Header, Hero, Blog } from './components';

const App = () => {
 return (
  <>
   <Header />
   <main>
    <Hero />
    <About />
    <Blog />
   </main>
  </>
 );
};

export default App;
