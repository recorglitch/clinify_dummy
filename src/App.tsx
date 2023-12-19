import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Demo from "./Pages/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/demo" Component={Demo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
