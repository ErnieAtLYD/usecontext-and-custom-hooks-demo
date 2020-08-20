import React from "react";
import useIndex from "./useIndex";

const Index = () => {
  const [handleLogin, handleLogout, user] = useIndex();
  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={handleLogin}>Logout</button>
      ) : (
        <button onClick={handleLogout}>Fake login form</button>
      )}
    </>
  );
};

export default Index;
