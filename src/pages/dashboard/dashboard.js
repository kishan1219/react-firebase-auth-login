import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigate("/");
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    {user ? (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Hello World</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => auth.signOut()}
        >
          Logout
        </button>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </div>
  );
}

export default Dashboard;
