import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfoPage from "./pages/basic-info";
import DocsPage from "./pages/docs";
import ProjectInfoPage from "./pages/start/project-info";
import TypeInfoPage from "./pages/start/type-info";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<BasicInfoPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/projectInfo" element={<ProjectInfoPage />} />
        <Route path="/typeInfo" element={<TypeInfoPage />} />
        {/* 오염원 - 오염물질 */}
        {/* <Route path="/input/source/coc1" element={<Coc1Page />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
