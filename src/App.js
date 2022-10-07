import FirstComponent from "./components/FirstComponent";
import {createContext} from 'react'

export const myContext = createContext()

function App() {
  return (
    <myContext.Provider value='Muhammad'>
      <div>
          <FirstComponent/>
      </div>
    </myContext.Provider>
  );
}

export default App;
