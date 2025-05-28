import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home/Index";
import Movies from "./pages/Movies/Index";
import Tv from "./pages/Tv/Index";
import MovieDetails from "./pages/MovieDetails/Index";
import TvDetails from "./pages/TvDetails/Index";
import Search from "./pages/Search/Index";
import Login from "./pages/Login/Index";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/movies" element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          } />
          <Route path="/tv" element={
            <PrivateRoute>
              <Tv />
            </PrivateRoute>
          } />
          <Route path="/movie/:id" element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          } />
          <Route path="/tv/:id" element={
            <PrivateRoute>
              <TvDetails />
            </PrivateRoute>
          } />
          <Route path="/search" element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App; 