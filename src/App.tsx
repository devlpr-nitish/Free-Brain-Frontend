import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import AddContent from "./pages/AddContent";

function App() {
  return (
    <div className="bg-[#0A0A0A] pt-10 px-10 md:px-36 min-h-screen flex flex-col justify-between" >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/addcontent" element={<AddContent />} />
          <Route path="/user" element={<Account />} />
          <Route path="/auth" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
