import { Route, Routes } from "react-router";

import { Design } from "./pages/Design";
import Map from "./pages/Map";
import Bmi from "./pages/Bmi";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";
import { ResultsBmi } from "./pages/ResultsBmi";
import { ExCard } from "./pages/Ex-card";
import { Card } from "./components/Card";
import { BodyModel } from "./components/BodyModel";
import FirstCanvas from "./components/BodyModelCanvas";

function App() {
  return (
    <div className="App dark:bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/bmi" element={<Bmi />}></Route>
        <Route path="/bmi/results" element={<ResultsBmi />} />
        <Route path="/ex-card" element={<FirstCanvas />}>
          <Route path=":bodyPart" element={<ExCard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
