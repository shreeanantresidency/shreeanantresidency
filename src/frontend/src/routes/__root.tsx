import { Outlet, createRootRoute } from "@tanstack/react-router";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";

export const Route = createRootRoute({
  component: () => (
    <>
      <Preloader />
      <Layout>
        <Outlet />
      </Layout>
    </>
  ),
});
