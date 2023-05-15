import { Link } from "react-router-dom";
import pb from "../../lib/pocketbase";

const Navigation = () => {
  return (
    <div className="navigation w-[650px] max-w-[90vw] flex place-content-evenly items-center">
      <Link to="/" onClick={() => window.reload()}>
        <h6>Body</h6>
      </Link>
      {/* <>|</>
      <Link to="/map">
        <h6>Nearest gyms</h6>
      </Link> */}
      <>|</>
      <Link to="/bmi">
        <h6>Daily calories</h6>
      </Link>
      <>|</>
      <Link to="/mealPlan">
        <h6>Meal plan</h6>
      </Link>
      <>|</>
      {pb.authStore.isValid ? (
        <Link to="profile">
          <h6>Profile</h6>
        </Link>
      ) : (
        <Link to="login">
          <h6>Login</h6>
        </Link>
      )}
    </div>
  );
};

export default Navigation;
