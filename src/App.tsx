import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import "./App.css";
import "./sass/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminPage from "./pages/AdminPage";
// import supabase from "./services/supabase";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// // Private Route komponenti
// const PrivateRoute = ({ children }) => {
//   const session = supabase.auth.session(); // Foydalanuvchi sessiyasini olish

//   return session ? children : <Navigate to="/login" />;
// };

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <Navigate replace to="dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "projects", element: <Projects /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "login", element: <LoginPage /> },
    { path: "projects/:id", element: <Project /> },
    {
      path: "/admin",
      element: (
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      ),
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#ffffff8b",
            color: "#000",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
