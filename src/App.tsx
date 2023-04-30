import { About, Header, Hero, Blog, Cases, Team, Contact, Footer } from './components';

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
   <Footer />
  </>
 );
};

export default App;
