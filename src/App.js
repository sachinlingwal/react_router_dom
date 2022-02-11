import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Admin from "./components/Admin";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import OrderSummery from "./components/OrderSummery";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

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

        {/* <Route path="users" element={<Users />} /> */}
        {/* <Route path="users/:userId" element={<UserDetails />} /> */}
        {/* <Route path="users/1" element={<UserDetails />} />
        <Route path="users/2" element={<UserDetails />} />
        <Route path="users/3" element={<UserDetails />} /> */}
        {/* <Route path="users/admin" element={<Admin />} /> */}

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
