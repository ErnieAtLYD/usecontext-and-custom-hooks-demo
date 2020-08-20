import { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

/**
 * So what's this? This is an example of a custom
 * hook. A big reason for this hook is to separate
 * concerns, the presentational JSX from the busi-
 * ness logic of the various hooks.
 *
 * Honestly, I kinda like how clean it looks now.
 * Do you?
 *
 * Some more links:
 * - shorturl.at/hwDFH
 * - shorturl.at/asSU7
 */
const useIndex = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = async () => {
    setUser(null);
  };
  const handleLogout = async () => {
    const user = await login();
    setUser(user);
  };

  // We may not be returning JSX, but we should still
  // return an object which includes the handlers and
  // the state, which is used in our JSX.
  return [handleLogin, handleLogout, user];
};

export default useIndex;
