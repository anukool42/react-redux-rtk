import { createBrowserRouter } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import DashboardPage from "./pages/DashboardPage";
import SinglePostPage from "./pages/SinglePostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/posts/:id",
    element: <SinglePostPage />,
  },
]);
