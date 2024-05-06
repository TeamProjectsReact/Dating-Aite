import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./comportments/HomePage/HomePage";
import DarkModeTest from "./comportments/Testings/DarkModeTest";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DarkModeTest" element={<DarkModeTest />} />
      </Routes>
    </BrowserRouter>
  )
}