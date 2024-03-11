import "./css/App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import  Header  from "./components/Header";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import Sidebar from "./components/Sidenav";
function App() {
  return (
    <>
    <BrowserRouter> 
    <Header />
    <Sidebar/>
    <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;