import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from "./ui/NavBar";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";

type UserRole = "admin" | "driver" | "sponsor" | "guest";


function App() {
  const { user } = useAuthenticator();
  const [initialNavigationDone, setInitialNavigationDone] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserRole() {
      try {
        await getCurrentUser(); // Verify user is authenticated
        const session = await fetchAuthSession();
        
        // Type assertion to ensure groups is treated as string array
        const groups = (session.tokens?.accessToken?.payload['cognito:groups'] as string[]) || [];
        
        // Check group membership and set role accordingly
        if (groups.includes("Admin")) setRole("admin");
        else if (groups.includes("Driver")) setRole("driver");
        else if (groups.includes("Sponsor")) setRole("sponsor");
        else setRole("guest");

      } catch (error) {
        console.error('Error fetching user role:', error);
        setRole("guest");
      }
    }

    fetchUserRole();
  }, []);

  useEffect(() => {
    if (!initialNavigationDone) {
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "driver") {
        navigate("/driver-dashboard");
      } else if (role === "sponsor") {
        navigate("/sponsor-dashboard");
      } else {
        navigate("/unauthorized");
      }

      // Set the flag to prevent re-navigation
      setInitialNavigationDone(true);
    }
  }, [role, navigate, initialNavigationDone]);

  return (
    <>
      <NavBar />
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div>
            {role === "driver" ? (
              <h1>Welcome, Driver {user?.signInDetails?.loginId}</h1>
            ) : role === "admin" ? (
              <h1>Welcome, Admin {user?.signInDetails?.loginId}</h1>
            ) : role === "sponsor" ? (
              <h1>Welcome, Sponsor {user?.signInDetails?.loginId}</h1>
            ) : (
              <h1>Unauthorized</h1>
            )}
          </div>
        </div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
