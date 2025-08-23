import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import s from "./Layout.module.css";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className={s.layout}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          {isHomePage ? (
            <Outlet />
          ) : (
            <Container>
              <Outlet />
            </Container>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
