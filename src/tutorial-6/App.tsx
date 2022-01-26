import Article from "./pages/Article";
import React, { Children } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../tutorial-6/App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
// type RouteProps = {
//   path: any;
//   children: any;
//   exact?: boolean;
// };

// function Route({ path, children, exact }: RouteProps) {
//   const { pathname } = window.location;

//   if (exact) {
//     if (pathname === path) {
//       return children;
//     }
//   } else {
//     if (pathname.includes(path)) {
//       return children;
//     }
//   }
//   return null;
// }

const ProtectedRoute: React.FC = () => {
  const token = window.localStorage.getItem("token");

  return token ? <h2>Это протектед епта</h2> : <Navigate to="/" />;
};

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/profile" element={<ProtectedRoute />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/post/:articleId" element={<Article />} />
        <Route path="*" element={<h1>Страница не найдена!</h1>} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
