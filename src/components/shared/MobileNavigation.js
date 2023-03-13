import { Link } from "react-router-dom";

import { useState } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildReaching,
  faMapLocationDot,
  faUtensils,
  faPizzaSlice,
  faRightToBracket,
  faRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const animatedFrom = { opacity: 0, y: -40};
  const animatedTo = { opacity: 1, y: 0 };

  window.addEventListener("resize", () => setOpen(false));

  return (
    <div className="mobile-navigation items-center">
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={!open ? faBars : faXmark}
        size="2xl"
        onClick={() => setOpen((value) => !value)}
      />
      {open && (
        <div className="flex flex-col gap-2 absolute top-[8vh] right-0 py-5 px-10 bg-blue-900 dark:bg-purple-800 border-t-2 rounded-bl-lg border-white z-10">
          <Link to="/" onClick={() => window.reload()}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.05}}
            >
              <FontAwesomeIcon icon={faChildReaching} />
              <h6>Body</h6>
            </motion.div>
          </Link>
          <Link to="/map" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.10}}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
              <h6>Nearest gyms</h6>
            </motion.div>
          </Link>
          <Link to="/bmi" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.15}}
            >
              <FontAwesomeIcon icon={faUtensils} />
              <h6>Daily calories</h6>
            </motion.div>
          </Link>
          <Link to="/mealPlan" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.20}}
            >
              <FontAwesomeIcon icon={faPizzaSlice} />
              <h6>Meal plan</h6>
            </motion.div>
          </Link>
          <Link to="login" onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.25}}
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <h6>Login</h6>
            </motion.div>
          </Link>
          <Link to="/"  onClick={() => setOpen(false)}>
            <motion.div className="flex flex-row gap-3 items-center"
            initial={animatedFrom}
            animate={animatedTo}
            transition={{delay: 0.30}}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              <h6>Logout</h6>
            </motion.div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
