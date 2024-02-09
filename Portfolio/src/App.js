import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <SideBar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        {/* <Resume /> */}
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
