import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Protected from "./protected";
import Layout from "components/layout";
import PageNotFound from "pages/pageNotFound";
import LazyLoader from "./lazyLoader";
import { loader as homeLoader } from "pages/home";
import { isAuthenticated } from "utils/helpers";
import Unauthorized from "pages/unauthorized";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Protected Component={<LazyLoader page="home" />} />}
        loader={homeLoader}
        errorElement={"Something Went Wrong"}
      />
      <Route
        path="login"
        element={<LazyLoader page="login" />}
        loader={async () => await isAuthenticated()}
      />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

// TODO: Create an error component and replace with Something went wrong in errorElement prop

const Index = () => <RouterProvider router={router} />;

export default Index;
