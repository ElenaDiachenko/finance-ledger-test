import { About, Header, Hero, Blog, Cases, Contact } from './components';

const App = () => {
 return (
  <>
   <Header />
   <main>
    <Hero />
    <About />
    <Cases />
    <Blog />
    <Contact />
   </main>
  </>
 );
};

export default App;
