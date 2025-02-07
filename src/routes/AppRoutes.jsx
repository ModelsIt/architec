import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../module/Home/Home";
import { WorkUs } from "../module/workUs/WorkUs";
import { ShowJob } from "../module/showJobe/showJobe";
import { AboutUs } from "../module/aboutUs/aboutUs";
import { Uslogi } from "../module/uslogi/uslogi";
import { ShowJobOne } from "../module/ShowJobeOne/showJobeOne";
import { Portfel } from "../module/portfel/portfel";
export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>{<Home />}</Layout>} />
      <Route path="businessIdeas" element={<Layout>{<WorkUs />}</Layout>} />
      <Route path="forBuilders" element={<Layout>{<ShowJob />}</Layout>} />
      <Route
        path="forFurnitureStores"
        element={<Layout>{<ShowJobOne />}</Layout>}
      />
      <Route path="aboutUs" element={<Layout>{<AboutUs />}</Layout>} />
      <Route path="services" element={<Layout>{<Uslogi />}</Layout>} />
      <Route path="projects" element={<Layout>{<Portfel />}</Layout>} />
    </Routes>
  );
};
