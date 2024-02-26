import {Navigate, Route, Routes} from "react-router-dom";
import MainPageESP from "./pages/MainPageESP";
import ServiciosESP from "./pages/ServiciosESP";
import NosotrosPage from "./pages/NosotrosPage";
import MercadoObjPage from "./pages/MercadoObjPage";

const theme = {
    colors: {
        background: '#888885',
    },

};
function App() {
  return (
          <Routes>
              <Route
                path="*"
                element={<Navigate to="/main" replace={true}/>}
                />
              <Route path="/main" element={<MainPageESP/>}/>
              <Route path="/servicios" element={<ServiciosESP/>}/>
              <Route path="/nosotros" element={<NosotrosPage/>}/>
              <Route path="/mercadoobj" element={<MercadoObjPage/>}/>
          </Routes>
  );
}

export default App;