import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18nProvider from "./i18n/i18n";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <I18nextProvider i18n={i18nProvider}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
