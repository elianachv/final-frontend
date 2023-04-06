import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Contact from "./Pages/Contact/Contact";
import Favs from "./Pages/Favs/Favs";
import GlobalState from "./Context/global.state";
import "./Css/Global.css";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
