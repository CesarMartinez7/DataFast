import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import LoadingComponente from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/Home"));
const RegistrerPage = lazy(() => import("./pages/Registrer"));
const NotFoundPage = lazy(() => import("./pages/404"));
const DataListV2Page = lazy(() => import("./pages/DataList"));
const DataListV1Component = lazy(() => import("./components/DataListGrid/DataListGrid"));
const Documentacion = lazy(()=>{
  return import("./pages/Documentacion")})

export function App() {
  return (
    <Suspense fallback={<LoadingComponente />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="registrer" element={<RegistrerPage />} />
          <Route path="datosv1" element={<DataListV1Component />} />
          <Route path="datosv2" element={<DataListV2Page />} />
          <Route path="documentacion" element={<Documentacion></Documentacion>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}




