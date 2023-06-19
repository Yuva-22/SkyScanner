import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Login from "./routes/login";

export default function App(){
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}
