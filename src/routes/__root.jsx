import { createRootRoute, Outlet } from "@tanstack/react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import { HomepageProvider } from "../context/HomepageContext";
import NotFound from "../components/NotFound/404";
export const Route = createRootRoute({
  component: () => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      {/* <HomepageProvider> */}
        <Outlet />
        <ToastContainer theme="colored" />
      {/* </HomepageProvider> */}
    </GoogleOAuthProvider>
  ),
  notFoundComponent: NotFound,
});
