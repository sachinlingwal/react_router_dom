import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import OrderSummery from "./components/OrderSummery";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
