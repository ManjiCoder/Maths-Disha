import HcfLcm from "./components/HcfLcm";
import DivisibilityTest from "./components/DivisibilityTest";
import HomePage from "./components/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const title = "Maths Disha";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="/divisibilityTest" element={<DivisibilityTest />} />
        <Route path="/hcflcm" element={<HcfLcm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
