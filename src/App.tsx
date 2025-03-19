import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the child route components */}
      </main>
      <Footer />
    </>
  );
};

const routerData = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
];

function App() {
  const router = createBrowserRouter(routerData);

  return (
    <>
      {/* <I18nextProvider i18n={i18nProvider}> */}
      <RouterProvider router={router} />
      {/* </I18nextProvider> */}
    </>
  );
}

export default App;
