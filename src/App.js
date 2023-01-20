import { Route, Routes } from "react-router";
import { Design } from "./Design";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/design" element={<Design/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
