import { Route, Routes } from "react-router";
import Bmi from "./Bmi";
import { Design } from "./Design";

function App() {
  return (
    <div className="App dark:bg-slate-900">
    <Routes>
      <Route path="/design" element={<Design/>}></Route>
      <Route path="/bmi" element={<Bmi/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
