import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../routes/home";
import About from "../../routes/about";
import Contact from "../../routes/contact";
import Layout from "../layout/layout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
