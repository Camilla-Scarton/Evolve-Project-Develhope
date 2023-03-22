import { Navigate, Route, Routes } from "react-router";

import { Design } from "./pages/Design";
import Map from "./pages/Map";
import Bmi from "./pages/Bmi";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";
import { ExCard } from "./pages/Ex-card";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import FirstCanvas from "./components/BodyModelCanvas";
import { MealPlan } from "./pages/MealPlan";
import { Profile } from "./pages/Profile";
import pb from "./lib/pocketbase";

function App() {
  return (
    <div className="App dark:bg-slate-900 flex flex-col h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/bmi" element={<Bmi />}></Route>
          <Route path="/mealPlan" element={<MealPlan />}></Route>
          <Route path="/" element={<FirstCanvas />}>
            <Route path=":bodyPart" element={<ExCard />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={pb.authStore.isValid ? <Profile /> : <Navigate to="/login" replace />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

