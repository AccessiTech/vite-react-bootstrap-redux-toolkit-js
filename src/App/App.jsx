import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import "./App.scss";

function App() {
  return (
    // Note - update the basename value to reflect the location of your application.
    <BrowserRouter basename="/vite-react-bootstrap-redux-toolkit-js">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
