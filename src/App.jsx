import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import SearchPage from "./pages/search/SearchPage";
import SingleUserPage from "./pages/singleUser/SingleUserPage";
import SignUpPage from "./pages/signup/SignUpPage";
import LoginFormPage from "./pages/loginform/LoginFormPage";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/store";
import { Loader } from "./components";
import Repos from "./pages/repos/Repos";

function App() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/users'
          element={<Users />}
        />
        <Route
          path='/search/:query'
          element={<SearchPage />}
        />
        <Route
          path='/user/:username'
          element={<SingleUserPage />}
        />
        <Route
          path='/signup'
          element={<SignUpPage />}
        />
        <Route
          path='/login'
          element={<LoginFormPage />}
        />
        <Route
          path='user/:username/repos'
          element={<Repos />}
        />
      </Route>
    )
  );

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {loading ? <Loader /> : <RouterProvider router={router} />}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
