import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Hero from "./components/hero/Hero"
import Works from "./components/works/Works";
import css from "./styles/app.module.scss";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portfolio/>
    <Footer/>
  </div>
};

export default App;
