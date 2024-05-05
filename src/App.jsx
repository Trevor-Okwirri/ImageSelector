import './App.css';
import { useState } from "react";
import ImageContext from "./contexts/ImageContext";
import FetchImageComponent from './components/FetchImageComponent';
import DisplayImageComponent from './components/DisplayImageComponent';

function App() {
  const [imageData, setImageData] = useState({ url: '', metadata: {} });

  return (
    <div>
      <ImageContext.Provider value={{  imageData, setImageData  }}>
        
        <FetchImageComponent />
      <DisplayImageComponent />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
