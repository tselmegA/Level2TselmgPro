import "./App.css";
import Product from "./Pages/Product";
import Header from "./Pages/Header";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";
import Services from "./Pages/Services";
import BlogPost from "./Pages/blogPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <div className="Body">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
            <Route path="BlogPost" element={<BlogPost />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
