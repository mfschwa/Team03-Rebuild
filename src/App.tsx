import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

type UserRole = "admin" | "driver" | "sponsor" | "guest";

function App() {
  const { user, signOut } = useAuthenticator();
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
        if (groups.includes("admin")) setRole("admin");
        else if (groups.includes("driver")) setRole("driver");
        else if (groups.includes("sponsor")) setRole("sponsor");
        else setRole("guest");

      } catch (error) {
        console.error('Error fetching user role:', error);
        setRole("guest");
      }
    }

    fetchUserRole();
  }, []);

  useEffect(() => {
    // Redirect based on role
    if (role) {
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "driver") {
        navigate("/driver-dashboard");
      } else if (role === "sponsor") {
        navigate("/sponsor-dashboard");
      } else {
        navigate("/unauthorized");
      }
    }
  }, [role, navigate]);

  return (
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
        <button 
          onClick={signOut}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff0000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}

export default App;
