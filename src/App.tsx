import { About, Header, Hero, Blog, Cases, Team, Contact } from './components';

const App = () => {
 return (
  <>
   <Header />
   <main>
    <Hero />
    <About />
    <Cases />
    <Blog />
    <Team />
    <Contact />
   </main>
  </>
 );
};

export default App;
