import { Route, Routes } from "react-router";

import { Design } from "./pages/Design";
import Map from "./pages/Map";
import Bmi from "./pages/Bmi";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";
import { ExCard } from "./pages/Ex-card";
import FirstCanvas from "./components/BodyModelCanvas";

function App() {
  return (
    <div className="App dark:bg-slate-900 flex flex-col h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/bmi" element={<Bmi />}></Route>
          <Route path="/" element={<FirstCanvas />}>
            <Route path=":bodyPart" element={<ExCard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

