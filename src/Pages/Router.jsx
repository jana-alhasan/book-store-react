import RootPage from "./RootPage";
import Home from "./Home";
import BookDetails from "./BookDetails/BookDetails";
import SearchPage from "./SearchPage/SearchPage";
import { createBrowserRouter} from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/BookDetails/:bookId", element: <BookDetails/> },
      { path: "/search", element: <SearchPage/> },   
    ],
  },
]);

export default Routes;
