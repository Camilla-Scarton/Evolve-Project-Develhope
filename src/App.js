import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Bmi from "./Bmi";
import { Design } from "./Design";
import Map from "./Map";

function App() {


  return (
    <div className="App dark:bg-slate-900">
    <Routes>
      <Route path="/map" element={<Map />}></Route>
      <Route path="/design" element={<Design/>}></Route>
      <Route path="/bmi" element={<Bmi/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
