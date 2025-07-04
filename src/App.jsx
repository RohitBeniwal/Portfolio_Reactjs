import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero"
import Background3D from "./components/Background3D/Background3D";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import GitHubProjects from "./components/GitHubProjects/GitHubProjects";
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
        
        {/* Main Content - Optimized Flow */}
        <Header/>
        <Hero/>
        <GitHubProjects />
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
