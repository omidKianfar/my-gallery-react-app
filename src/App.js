import Styles from './App.module.css';

import Gallery from "./Components/Gallery";

function App() {
  return (
    <div>
      <h1 className={Styles.textCenter}>Image Gallery</h1>
      <h2 className={Styles.textCenter}>Please  click on image to see better that</h2>
      <Gallery />
    </div>
  );
}

export default App;
