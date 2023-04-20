import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ChartsAndMaps from "./components/ChartsAndMaps";
import Error from "./components/Error";
import Contact from "./components/Contact";
import CreateContact from "./components/CreateContact";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contact />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="charts-and-maps" element={<ChartsAndMaps />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
