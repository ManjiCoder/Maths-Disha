import DivisibilityTest from "./components/DivisibilityTest";
import HcfLcm from "./components/HcfLcm";
import HomePage from "./components/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimeDivision from "./pages/PrimeDivision";

function App() {
  const title = "Maths Disha";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="/divisibilityTest" element={<DivisibilityTest />} />
        <Route path="/hcflcm" element={<HcfLcm />} />
        <Route path="/prime-division" element={<PrimeDivision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
