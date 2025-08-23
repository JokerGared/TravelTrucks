import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy } from "react";
import NotFound from "./pages/NotFoundPage/NotFound";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TrucksPage = lazy(() => import("./pages/TrucksPage/TrucksPage"));
const TruckPage = lazy(() => import("./pages/TruckPage/TruckPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="campers" element={<TrucksPage />} />
        <Route path="campers/:id" element={<TruckPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
