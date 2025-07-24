import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
// pages:
import HomePage from "./pages/HomePage";
import LocalsSearchedPage from "./pages/LocalsSearchedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={MainLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/search/" Component={LocalsSearchedPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}