import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
