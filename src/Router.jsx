import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coc from "./pages/1_1_coc/coc_1";
import CocPoint from "./pages/1_1_coc/coc_2";
import Depth from "./pages/1_2_depth/depth_1";
import PopElevation from "./pages/1_2_depth/depth_1_pop_elevation";
import PopWaterLevel from "./pages/1_2_depth/depth_1_pop_waterlevel";
import ElevationPoint from "./pages/1_2_depth/depth_2";
import Concentration from "./pages/1_3_conc/conc_1";
import PopDeffi from "./pages/1_3_conc/conc_1_pop_Deffi";
import PopSatConc from "./pages/1_3_conc/conc_1_pop_sat_conc";
import PopUnsatConc from "./pages/1_3_conc/conc_1_pop_unsat_conc";
import ConcPoint from "./pages/1_3_conc/conc_2";
import Geo1 from "./pages/2_1_geo/geo_1";
import Geo2 from "./pages/2_1_geo/geo_2";
import PopGeotype from "./pages/2_1_geo/geo_2_pop";
import Found1 from "./pages/2_2_found/found_1";
import Found2 from "./pages/2_2_found/found_2";
import PopFoundtype from "./pages/2_2_found/found_2_pop";
import Receptor from "./pages/3_exp/receptor_1";
import ReceptorPoint from "./pages/3_exp/receptor_2";
import PopRecep from "./pages/3_exp/receptor_2_pop";
import BasicInfoPage from "./pages/basic-info";
import DocsPage from "./pages/docs";
import Output1 from "./pages/output/output_1";
import Output2 from "./pages/output/output_2";
import BasicPdf from "./pages/pdf/basicPDF";
import SitePdf from "./pages/pdf/sitePDF";
import ProjectInfoPage from "./pages/start/project-info";
import TypeInfoPage from "./pages/start/type-info";
import TCoc1 from "./pages/tutorial/1_coc";
import TConc1 from "./pages/tutorial/1_conc";
import TDepth1 from "./pages/tutorial/1_depth";
import TExp1 from "./pages/tutorial/1_exp";
import TFound1 from "./pages/tutorial/1_found";
import TGeo1 from "./pages/tutorial/1_geo";
import TOutput1 from "./pages/tutorial/1_output";
import TCoc2 from "./pages/tutorial/2_coc";
import TConc2 from "./pages/tutorial/2_conc";
import TDepth2 from "./pages/tutorial/2_depth";
import TExp2 from "./pages/tutorial/2_exp";
import TFound2 from "./pages/tutorial/2_found";
import TGeo2 from "./pages/tutorial/2_geo";
import TOutput2 from "./pages/tutorial/2_output";
import TInfo from "./pages/tutorial/info";

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
        <Route path="/input/source/coc1" element={<CocPoint />} />
        <Route path="/input/source/coc2" element={<Coc />} />
        {/* 오염원 - 오염심도 */}
        <Route path="/input/source/depth1" element={<ElevationPoint />} />
        <Route path="/input/source/depth2" element={<Depth />} />
        <Route path="/waterlevel" element={<PopWaterLevel />} />
        <Route path="/elevation" element={<PopElevation />} />
        {/* 오염원 - 오염농도 */}
        <Route path="/input/source/conc1" element={<ConcPoint />} />
        <Route path="/input/source/conc2" element={<Concentration />} />
        <Route path="/satsoilconc" element={<PopSatConc />} />
        <Route path="/unsatsoilconc" element={<PopUnsatConc />} />
        <Route path="/deffi" element={<PopDeffi />} />

        {/* 경로 - 지질매체 */}
        <Route path="/input/pathway/geo1" element={<Geo1 />} />
        <Route path="/input/pathway/geo2" element={<Geo2 />} />
        <Route path="/geotype" element={<PopGeotype />} />
        {/* 경로 - 건물 */}
        <Route path="/input/pathway/found1" element={<Found1 />} />
        <Route path="/input/pathway/found2" element={<Found2 />} />
        <Route path="/foundtype" element={<PopFoundtype />} />
        {/* 수용체 - 노출특성 */}
        <Route path="/input/receptors/exp1" element={<Receptor />} />
        <Route path="/input/receptors/exp2" element={<ReceptorPoint />} />
        <Route path="/receptor" element={<PopRecep />} />
        {/* 결과 확인 */}
        <Route path="/output1" element={<Output1 />} />
        <Route path="/output2" element={<Output2 />} />
        {/* 튜토리얼 */}
        <Route path="/tutorial" element={<TInfo />} />
        {/* 튜토리얼 - 기본평가 */}
        <Route path="/tutorial/1/coc" element={<TCoc1 />} />
        <Route path="/tutorial/1/depth" element={<TDepth1 />} />
        <Route path="/tutorial/1/conc" element={<TConc1 />} />
        <Route path="/tutorial/1/geo" element={<TGeo1 />} />
        <Route path="/tutorial/1/found" element={<TFound1 />} />
        <Route path="/tutorial/1/exp" element={<TExp1 />} />
        <Route path="/tutorial/1/output" element={<TOutput1 />} />

        {/* 튜토리얼 - 부지기반평가 */}
        <Route path="/tutorial/2/coc" element={<TCoc2 />} />
        <Route path="/tutorial/2/depth" element={<TDepth2 />} />
        <Route path="/tutorial/2/conc" element={<TConc2 />} />
        <Route path="/tutorial/2/geo" element={<TGeo2 />} />
        <Route path="/tutorial/2/found" element={<TFound2 />} />
        <Route path="/tutorial/2/exp" element={<TExp2 />} />
        <Route path="/tutorial/2/output" element={<TOutput2 />} />

        {/* PDF */}
        <Route path="/basicPDF" element={<BasicPdf />} />
        <Route path="/sitePDF" element={<SitePdf />} />
      </Routes>
    </BrowserRouter>
  );
}
