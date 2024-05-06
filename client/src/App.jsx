import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./comportments/HomePage/HomePage";
import Dashboard from "./comportments/Dashboard/Dashboard";
import PrivateRoute from "./comportments/Security/PrivateRoute";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}