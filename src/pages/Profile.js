import { useNavigate } from "react-router";
import pb from "../lib/pocketbase";

export const Profile = () => {
  const navigate = useNavigate();

  function logout() {
    pb.authStore.clear();
    navigate("/login", { replace: true });
    window.location.reload(false);
  }

  return (
    <>
      <h1>wiiiiiiii</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};
