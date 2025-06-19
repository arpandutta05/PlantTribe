import PlantAnalysis from "./pages/PlantAnalysis";
import GrowthTracking from "./pages/GrowthTracking";
import DiseaseDetection from "./pages/DiseaseDetection";
import HealthCheck from "./pages/HealthCheck";
import Sell from "./pages/Sell";
import Compost from "./pages/Compost";
import Shop from "./pages/Shop";
import Market from "./pages/Market";import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/FarmerDashboard";
import GardenerDashboard from "./pages/GardenerDashboard";

const RoutesConfig = () => (
  <Routes>
    <Route path="/analysis" element={<PlantAnalysis />} />
    <Route path="/growth" element={<GrowthTracking />} />
    <Route path="/disease" element={<DiseaseDetection />} />
    <Route path="/health" element={<HealthCheck />} />
    <Route path="/sell" element={<Sell />} />
    <Route path="/compost" element={<Compost />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/market" element={<Market />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/farmer" element={<FarmerDashboard />} />
    <Route path="/gardener" element={<GardenerDashboard />} />
  </Routes>
);

export default RoutesConfig;