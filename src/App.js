import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
import "./App.css";
import Admin from "./components/Admin";
import { AuthProvider } from "./components/Auth";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import OrderSummery from "./components/OrderSummery";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
// import About from "./components/About";
const LazyAbout = lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>React Routing</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="about" element={<About />} /> */}
          <Route
            path="about"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <LazyAbout />
              </Suspense>
            }
          />

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
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
