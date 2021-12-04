import "./styles.css";

import Page1 from "./pages/page1/page1.jsx"
import Page2 from "./pages/page2/page2.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
  );
}
