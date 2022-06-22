import Styles from './App.module.css';

import Gallery from "./Components/Gallery";

function App() {
  return (
    <div>
      <h1 className={Styles.h1}>Gallery</h1>
      <Gallery />
    </div>
  );
}

export default App;
