import Blog from "./components/Blog";
import Post from "./components/Post";
import Product from "./components/Product";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/products/:id", element: <Product /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/profile", element: <Profile /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/products", element: <Products /> },
  { path: "/post", element: <Post /> },
  { path: "/post/:id", element: <Post /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
