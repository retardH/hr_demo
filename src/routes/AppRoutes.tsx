import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SamplePage from "../pages/sample/SamplePage";
import AboutPage from "../pages/about/AboutPage";
import MainLayout from "../layouts/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/sample",
        element: <SamplePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const AppRoutes = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default AppRoutes;
