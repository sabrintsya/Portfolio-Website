
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Journey } from "./components/Journey/Journey";
import { Navbar } from "./components/Navbar/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";


function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <Journey />
    <Portfolio />
  </div>;
};

export default App;
