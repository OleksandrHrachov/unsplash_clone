import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Gallery } from "./pages/Gallery";
import { ImagePage } from "./pages/ImagePage";
import { SearchGallery } from "./pages/SearchGallery";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Gallery />} />
          <Route path="/photo/:id" element={<ImagePage />} />
          <Route path="/search/:query" element={<SearchGallery />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
