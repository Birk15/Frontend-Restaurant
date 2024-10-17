import { Route, Routes } from "react-router-dom";
import { HOME_ROUTE, MITTAGSTISCH_ROUTE, GASTHAUS_ROUTE, SCHATZKARTE_ROUTE, GETRÄNKEKARTE_ROUTE, RESERVIEREN_ROUTE } from "../constanten/const";

// Importiere hier deine Komponenten
import Home from "../components/home";
import Mittagstisch from "../components/mittagstisch";
import Gasthaus from "../components/gasthaus";
import Schatzkarte from "../components/schatzkarte";
import Getränkekarte from "../components/getränkekarte";
import Reservieren from "../components/reservieren";

const AppRouter = () => (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={MITTAGSTISCH_ROUTE} element={<Mittagstisch />} />
      <Route path={GASTHAUS_ROUTE} element={<Gasthaus />} />
      <Route path={SCHATZKARTE_ROUTE} element={<Schatzkarte />} />
      <Route path={GETRÄNKEKARTE_ROUTE} element={<Getränkekarte />} />
      <Route path={RESERVIEREN_ROUTE} element={<Reservieren />} />
    </Routes>
);

export default AppRouter;