import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Hero from "./components/hero/Hero"
import Works from "./components/works/Works";
import Background3D from "./components/Background3D/Background3D";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import AchievementsVisualization from "./components/AchievementsVisualization/AchievementsVisualization";
import Skills3D from "./components/Skills3D/Skills3D";
import { ThemeProvider } from "./contexts/ThemeContext";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <ThemeProvider>
      <div className={`bg-primary ${css.container}`}>
        {/* 3D Neural Network Background */}
        <Background3D />
        
        {/* AI-Inspired Custom Cursor */}
        <CustomCursor />
        
        {/* Main Content */}
        <Header/>
        <Hero/>
        <AchievementsVisualization />
        <Skills3D />
        <Experties/>
        <Works/>
        <Portfolio/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
