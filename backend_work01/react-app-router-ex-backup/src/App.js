import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./inc/Aboutus";
import Contact from "./inc/Contact";
import Header from "./inc/Header";
import Lecture from "./inc/Lecture";
import Main from "./inc/Main";
import Product from "./inc/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/lecture" element={<Lecture />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
