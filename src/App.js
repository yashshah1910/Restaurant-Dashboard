import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateComponent from "./components/PrivateComponent";
import Homepage from "./pages/Homepage";
import Bookmark from "./pages/Bookmark";
import MapState from "./context/MapState";

function App() {
  return (
    <>
    <contact />
      <MapState>
        <Router>
          <Header />
            <Routes>
              <Route element={<PrivateComponent />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/bookmark" element={<Bookmark />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/about"  element={<About />}/>
              <Route path="/contact"  element={<Contact />}/>
            </Routes>
        </Router>
      </MapState>
    </>
  );
}

export default App;
