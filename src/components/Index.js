import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={async () => {
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Fake login form
        </button>
      )}
    </>
  );
};

export default Index;
