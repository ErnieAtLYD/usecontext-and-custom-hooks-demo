import React from "react";
import { UserContext } from "../UserContext";

const About = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <h1>About Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default About;
